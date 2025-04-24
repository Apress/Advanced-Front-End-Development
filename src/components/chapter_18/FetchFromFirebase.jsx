import { useState, useEffect } from "react";
import { db, collection, getDocs } from "../../firebase";

function FetchData() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "products"));
        const items = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setData(items);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex items-center justify-center bg-gray-100 p-6">
      <div className="w-full max-w-4xl bg-white p-8 rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
          Fetched Data from Firebase
        </h2>

        {data.length === 0 ? (
          <p className="text-gray-600 text-lg text-center">Loading data...</p>
        ) : (
          <ul className="space-y-4">
            {data.map((item) => (
              <li
                key={item.id}
                className="flex justify-between items-center bg-gray-50 p-4 rounded-md shadow-md hover:shadow-lg transition"
              >
                <span className="text-lg font-semibold text-gray-900">{item.name}</span>
                <span className="text-lg text-green-600 font-bold">${item.price}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default FetchData;
