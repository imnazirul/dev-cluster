import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Layout/Root";
import AddStudent from "./Pages/AddStudent/AddStudent";
import ManageStudents from "./Pages/ManageStudents/ManageStudents";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/add_student",
        element: <AddStudent />,
      },
      {
        path: "/manage_students",
        element: <ManageStudents />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />{" "}
  </React.StrictMode>
);