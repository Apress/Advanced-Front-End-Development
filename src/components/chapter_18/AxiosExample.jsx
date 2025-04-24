import axios from "axios";
import React, { useEffect, useState } from "react";

const AxiosExample = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts", {
          timeout: 5000, // Set timeout to 5 seconds
        });
        setData(response.data);
      } catch (error) {
        if (axios.isAxiosError(error)) {
          if (!error.response) {
            setError("Network Error: No response from server");
          } else {
            setError(`Error ${error.response.status}: ${error.response.statusText}`);
          }
        } else {
          setError("Unexpected error occurred.");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="w-full max-w-2xl bg-white p-6 rounded-lg shadow-lg text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Fetched Data with Axios</h2>

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

export default AxiosExample;
