import React from "react";
import { useParams } from "react-router-dom";

const BlogPost = () => {
  const { id } = useParams();

  return (
    <div className="max-w-3xl mx-auto p-8 bg-white rounded-lg shadow-lg mt-12">
      <h1 className="text-4xl font-bold text-gray-800 text-center mb-6">
        Blog Post
      </h1>
      <p className="text-lg text-gray-600 leading-relaxed text-justify">
        This is the content of the blog post with ID:{" "}
        <span className="block text-xl font-semibold text-gray-500 text-center mt-4 border-t border-gray-300 pt-4">
          {id}
        </span>
      </p>
    </div>
  );
};

export default BlogPost;
