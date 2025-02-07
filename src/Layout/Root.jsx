import { FiUsers } from "react-icons/fi";
import Navbar from "../Shared/Navbar/Navbar";
import { IoLogOutOutline } from "react-icons/io5";
import { NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";
import { LuListTodo } from "react-icons/lu";
import "./style.css";
import { useEffect } from "react";
import auth from "../firebase/firebase.config";
import toast, { Toaster } from "react-hot-toast";
import { signOut } from "firebase/auth";

const Root = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === "/") {
      navigate("/manage_students");
    }
  }, [location.pathname, navigate]);

  const handleLogout = () => {
    signOut(auth).then(() => {
      toast.success("Logout Successfully");
    });
  };

  return (
    <div className="font-ibm">
      <Navbar />
      <Toaster />
      <div className="flex pt-20 gap-6">
        {!(location.pathname === "/login") && (
          <div className="px-5 h-[50vh] flex w-72 items-center">
            <ul className="flex flex-col gap-6">
              <li>
                <NavLink
                  to="/add_student"
                  className="flex gap-2 items-center text-opacity-60 text-black hover:bg-[#F33823] hover:text-white px-2 py-2 rounded-md"
                >
                  {" "}
                  <FiUsers className="text-xl" /> Add Student
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/manage_students"
                  className="flex gap-2 items-center text-opacity-60 text-black hover:bg-[#F33823] hover:text-white px-2 py-2 rounded-md"
                >
                  {" "}
                  <LuListTodo className="text-[22px]" />
                  Manage Students
                </NavLink>
              </li>
              <li>
                {" "}
                <button
                  onClick={handleLogout}
                  className="flex w-full gap-2 items-center text-opacity-60 text-black hover:bg-[#F33823] hover:text-white px-2 py-2 rounded-md"
                >
                  {" "}
                  <IoLogOutOutline className="text-2xl" /> Logout
                </button>
              </li>
            </ul>
          </div>
        )}
        <Outlet />
      </div>
    </div>
  );
};

export default Root;
