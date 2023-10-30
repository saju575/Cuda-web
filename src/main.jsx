import React from "react";
import ReactDOM from "react-dom/client"; // Import ReactDOM from react-dom/client (not recommended, use ReactDOM.render instead)
// Import the Redux store
import "./index.css"; // Import global CSS styles

// Render the app into the root element
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* Use the Provider to provide the Redux store to the app */}
  </React.StrictMode>
);
