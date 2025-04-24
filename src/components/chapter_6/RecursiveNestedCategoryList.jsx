import React from "react";

const nestedCategories = [
  {
    name: "Electronics",
    subcategories: [
      { name: "Phones", subcategories: [] },
      {
        name: "Laptops",
        subcategories: [{ name: "Gaming Laptops", subcategories: [] }],
      },
    ],
  },
  {
    name: "Clothing",
    subcategories: [
      { name: "Men", subcategories: [] },
      { name: "Women", subcategories: [] },
    ],
  },
];

const RecursiveCategory = ({ categories }) => {
  return (
    <ul className="list-none p-0 m-0">
      {categories.map((category) => (
        <li
          key={category.name}
          className="text-gray-800 font-medium my-2 p-3 bg-white rounded-md shadow-md transition-transform transform hover:-translate-y-1 hover:shadow-lg cursor-pointer"
        >
          {category.name}
          {category.subcategories && category.subcategories.length > 0 && (
            <ul className="ml-5 border-l-2 border-green-500 pl-4 mt-2">
              <RecursiveCategory categories={category.subcategories} />
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
};

const App = () => {
  return (
    <div className="bg-gray-100 p-6">
      <h2 className="text-3xl font-bold text-green-600 text-center mb-6">
        Categories
      </h2>
      
      {/* Two-Column Layout */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 bg-gray-50 p-6 rounded-lg shadow-lg">
        <div className="bg-white p-6 rounded-md shadow-md">
          <h3 className="text-xl font-semibold text-green-700 border-b-2 border-green-500 pb-2 mb-4">
            Column 1
          </h3>
          <RecursiveCategory categories={nestedCategories.slice(0, Math.ceil(nestedCategories.length / 2))} />
        </div>
        
        <div className="bg-white p-6 rounded-md shadow-md">
          <h3 className="text-xl font-semibold text-green-700 border-b-2 border-green-500 pb-2 mb-4">
            Column 2
          </h3>
          <RecursiveCategory categories={nestedCategories.slice(Math.ceil(nestedCategories.length / 2))} />
        </div>
      </div>
    </div>
  );
};

export default App;
