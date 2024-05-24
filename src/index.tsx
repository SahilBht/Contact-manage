// Importing necessary modules and components
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"; // Importing the main CSS file
import App from "./App"; // Importing the main App component
import reportWebVitals from "./reportWebVitals"; // Importing performance measuring tool
import { BrowserRouter } from "react-router-dom"; // Importing BrowserRouter for routing
import store from "./Redux/store"; // Importing the Redux store
import { Provider } from "react-redux"; // Importing the Provider component from react-redux

// Logging the initial state of the Redux store to the console
console.log(store.getState());

// Creating the root element for the React application
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

// Rendering the application
root.render(
  <React.StrictMode>
    {/* Providing the Redux store to the entire app */}
    <Provider store={store}>
      {/* Enabling routing in the app */}
      <BrowserRouter>
        {/* Rendering the main App component */}
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// Measuring and reporting web vitals for performance analysis
reportWebVitals();
