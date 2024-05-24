// Import necessary modules and components
// useLocation from react-router-dom is commented out as it is not currently in use
// import { useLocation } from "react-router-dom";
import "./App.css"; // Import the CSS file for styling
import SideBar from "./Components/SideBar"; // Import the SideBar component
import AllRoutes from "./Pages/AllRoutes"; // Import the AllRoutes component which handles routing
import React from "react"; // Import React
import NavBar from "./Components/NavBar"; // Import the NavBar component

function App() {
  return (
    <div className="App">
      {/* Render the NavBar component */}
      <NavBar/>
      
      {/* Create a flex container to arrange the sidebar and main content */}
      <div className="flex w-full">
        
        {/* Sidebar section - sticky to the top and full height of the screen */}
        <div className="sticky top-0 h-screen">
          <SideBar />
        </div>
        
        {/* Main content section - full width */}
        <div className="w-full">
          <AllRoutes />
        </div>
      </div>
    </div>
  );
}

export default App; // Export the App component as the default export
