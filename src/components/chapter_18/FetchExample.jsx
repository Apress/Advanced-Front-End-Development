import React, { useEffect, useState } from "react";

const FetchExample = () => {
  const [data, setData] = useState(null); // Handle null case
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="w-full max-w-2xl bg-white p-6 rounded-lg shadow-lg text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Fetched Data with Fetch API</h2>

        {loading && <p className="text-blue-600 text-lg font-medium">Loading...</p>}
        {error && <p className="text-red-600 font-semibold">{error}</p>}

        <ul className="mt-4 space-y-3">
          {data &&
            data.map((item) => (
              <li
                key={item.id}
                className="bg-gray-200 px-4 py-3 rounded-md text-gray-800 font-medium transition transform hover:scale-105 hover:bg-gray-300"
              >
                {item.title}
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default FetchExample;
