// Importing necessary modules and hooks
import React from "react";
import { useLocation } from "react-router-dom";

// NavBar component for displaying the navigation bar
const NavBar = () => {
  const location = useLocation(); // Using the useLocation hook to get the current route
  const currentRoute = location.pathname; // Storing the current route path

  // Rendering the navigation bar
  return (
    <div className="bg-midnightblue text-clouds p-4">
      <h1 className="text-xl font-bold">
        {currentRoute === "/" ? "Contact Management App" : "Charts and Maps"}
      </h1>
    </div>
  );
};

// Exporting the NavBar component as the default export
export default NavBar;
