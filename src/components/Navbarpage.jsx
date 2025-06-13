import React from "react";
import { Link } from "react-router-dom"; // ✅ Import Link
const Navbarpage = () => {
  return (
    <nav className="bg-white shadow-sm">
      <div className="flex items-center justify-between max-w-7xl mx-auto h-16 px-4">
        <a href="#" className="text-2xl font-bold text-green-700">Bulkfruitsveg</a>
        <ul className="hidden md:flex items-center gap-8 font-medium text-gray-700">
            <li className="hover:text-green-500">home</li>
            <li>products</li>
        </ul>
        <div className="flex items-center gap-4">
            <button>login</button>
            <button>signup</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbarpage;
