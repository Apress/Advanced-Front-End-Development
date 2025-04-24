import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const posts = [
    { id: 1, title: "Understanding React Hooks" },
    { id: 2, title: "Introduction to JavaScript ES6 Features" },
  ];

  return (
    <div className="flex flex-col items-center justify-center bg-gray-100 p-10">
      <div className="max-w-3xl bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-gray-800 text-center mb-6">
          Welcome to My Blog
        </h1>
        <ul className="space-y-4">
          {posts.map((post) => (
            <li key={post.id} className="text-center">
              <Link
                to={`blog/${post.id}`}
                className="text-lg text-blue-600 font-semibold hover:text-blue-800 transition"
              >
                {post.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Home;
