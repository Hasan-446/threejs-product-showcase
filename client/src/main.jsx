import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Order from "./pages/Order.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignIn from "./pages/SignIn.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "order",
    element: <Order />,
  },
  {
    path: "dashboard",
    element: <Dashboard />,
  },
  {
    path: "signin",
    element: <SignIn />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
