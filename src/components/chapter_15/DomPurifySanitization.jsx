import React from "react";
import DOMPurify from "dompurify";

const SafeComponent = ({ content }) => {
  const sanitizedContent = DOMPurify.sanitize(content);
  return <div className="p-4 bg-gray-100 rounded-lg shadow" dangerouslySetInnerHTML={{ __html: sanitizedContent }} />;
};

const SafeComponentApp = () => {
  const unsafeHTML = `<h1 class="text-xl font-bold text-green-600">Hello World</h1><script>alert('XSS Attack!');</script>`;

  return (
    <div className="flex flex-col items-center justify-center bg-gray-50 p-6">
      <div className="max-w-3xl bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">Sanitized Content</h2>
        <SafeComponent content={unsafeHTML} />
      </div>
    </div>
  );
};

export default SafeComponentApp;
