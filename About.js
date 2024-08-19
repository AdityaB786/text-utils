import React from "react";

function About() {
  return (
    <div className="flex items-start justify-center min-h-screen bg-gray-100 py-10">
      <div className="bg-blue-50 p-8 rounded-lg shadow-lg w-full max-w-4xl">
        <h1 className="text-2xl font-bold mb-4 text-center text-blue-600">
          About TextUtils
        </h1>
        <p className="text-gray-700 mb-4">
          TextUtils is a powerful tool designed to help with various text manipulation and utility tasks. Whether you're a developer, content creator, or someone who frequently works with text, TextUtils offers a range of features to streamline your workflow. Key functionalities include:
        </p>
        <ul className="list-disc list-inside mb-4 text-gray-700">
          <li>Text transformation (uppercase, lowercase, title case)</li>
          <li>Text cleanup (remove extra spaces, trim whitespace)</li>
          <li>Text formatting (word count, character count)</li>
          <li>Text preview(view your text)</li>
        </ul>
        <p className="text-gray-700">
          With these tools, you can quickly and efficiently manage your text data, making it easier to focus on more important tasks. Whether you need to format a document, clean up user input, or analyze text, TextUtils has you covered.
        </p>
      </div>
    </div>
  );
}

export default About;
