/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const userInfo = useSelector((state) => state.auth);
  console.log(userInfo);

  if (userInfo.loading) {
    return (
      <div className="w-screen h-[70vh] flex items-center justify-center">
        <div className="w-24 h-24 border-[6px] border-dashed rounded-full animate-spin border-[#F33823]"></div>
      </div>
    );
  }
  if (userInfo.user) {
    return children;
  }
  return <Navigate to="/login"></Navigate>;
};

export default PrivateRoute;
