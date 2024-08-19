import React from "react";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-white text-2xl font-semibold">
          <Link to="/" className="flex items-center">
            {props.title}
          </Link>
        </div>
        <div className="space-x-4">
          <Link
            to="/"
            className="text-white hover:bg-blue-600 px-3 py-2 rounded"
          >
            Home
          </Link>
          <Link
            to="/About"
            className="text-white hover:bg-blue-600 px-3 py-2 rounded"
          >
            {props.li}
          </Link>
        </div>
      </div>
    </nav>
  );
}
