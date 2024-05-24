import { Link } from "react-router-dom";
import React, { useState } from "react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex border-r-2">
      {/* Sidebar container */}
      <div
        className={`inset-y-0 h-max left-0 w-64 transition duration-300 transform ${
          isOpen ? 'translate-x-0 z-30' : '-translate-x-full'
        } md:translate-x-0 md:block md:h-screen bg-wetasphalt text-silverr p-4 fixed md:relative`}
      >
        <h2 className="text-2xl font-semibold">Sidebar</h2>
        <nav className="mt-5">
          <Link to="/" className="block py-2 px-4 rounded hover:bg-gray-700">Contact</Link>
          <Link to="/dashboard" className="block py-2 px-4 rounded hover:bg-gray-700">Dashboard</Link>
        </nav>
      </div>

      {/* Overlay when the sidebar is open on small screens */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-20"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* Button to toggle the sidebar */}
      <button
        className="z-30 md:hidden fixed top-4 left-4 bg-blue-500 text-white p-2 rounded"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? 'Close' : 'Open'}
      </button>
    </div>
  );
};

export default Sidebar;
