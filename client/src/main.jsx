import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Order from "./pages/Order.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "order",
    element: <Order />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
