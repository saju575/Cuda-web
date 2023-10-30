import React from "react";
import ReactDOM from "react-dom/client"; // Import ReactDOM from react-dom/client (not recommended, use ReactDOM.render instead)
// Import the Redux store
import { RouterProvider } from "react-router-dom"; // Import RouterProvider for routing
import "./index.css"; // Import global CSS styles
import { router } from "./router/Router.jsx"; // Import the router configuration

// Render the app into the root element
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
