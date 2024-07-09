import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Layout/Root";
import AddStudent from "./Pages/AddStudent/AddStudent";
import ManageStudents from "./Pages/ManageStudents/ManageStudents";
import Login from "./Pages/Login/Login";
import { Provider } from "react-redux";
import store from "./app/store";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/add_student",
        element: (
          <PrivateRoute>
            <AddStudent />
          </PrivateRoute>
        ),
      },
      {
        path: "/manage_students",
        element: (
          <PrivateRoute>
            <ManageStudents />
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
