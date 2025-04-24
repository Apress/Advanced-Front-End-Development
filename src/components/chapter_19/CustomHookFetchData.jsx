import { useState, useEffect } from "react";

/** Custom Hook: useFetch */
const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true; // Prevents memory leaks if component unmounts

    async function fetchData() {
      try {
        setLoading(true); // Ensure loading state updates on new request
        const response = await fetch(url);
        if (!response.ok) throw new Error(`HTTP Error! Status: ${response.status}`);
        
        const result = await response.json();
        if (isMounted) setData(result);
      } catch (err) {
        if (isMounted) setError(err.message);
      } finally {
        if (isMounted) setLoading(false);
      }
    }

    fetchData();
    
    return () => {
      isMounted = false; // Cleanup to prevent state updates on unmounted component
    };
  }, [url]);

  return { data, loading, error };
};

/** Example Usage Component */
const FetchDataComponent = () => {
  const { data, loading, error } = useFetch("https://jsonplaceholder.typicode.com/posts");

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-6">
      <div className="max-w-3xl w-full bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">Custom Hook Fetch Data</h2>

        {/* Loading State */}
        {loading && <p className="text-lg text-blue-500 text-center">Loading...</p>}

        {/* Error Message */}
        {error && <p className="text-lg text-red-500 text-center">{error}</p>}

        {/* Display Data */}
        <ul className="divide-y divide-gray-300">
          {data &&
            data.map((post) => (
              <li key={post.id} className="p-4 hover:bg-gray-100 transition">
                <h3 className="font-semibold text-lg">{post.title}</h3>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default FetchDataComponent;
