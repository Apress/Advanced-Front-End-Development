import React from "react";

const categories = [
  {
    name: "Fruits",
    items: ["Apple", "Banana", "Cherry"],
  },
  {
    name: "Vegetables",
    items: ["Carrot", "Broccoli", "Spinach"],
  },
];

const CategoryList = () => {
  return (
    <div className="max-w-5xl mx-auto my-10 p-8 bg-gray-100 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-green-700 text-center mb-6">
        Category List
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {categories.map((category) => (
          <div key={category.name} className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-green-600 mb-4 border-b-2 border-green-500 pb-2">
              {category.name}
            </h3>
            <ul className="space-y-3">
              {category.items.map((item) => (
                <li
                  key={item}
                  className="bg-gray-100 text-gray-900 text-lg font-semibold p-4 rounded-md shadow-sm hover:bg-gray-200 transition"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
