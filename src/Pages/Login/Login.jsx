import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { googleSignIn, setLoading } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then(() => {
        toast.success("Login Successfully");
        navigate("/");
        setLoading(false);
      })
      .catch(() => toast.error("An Unknown Error Ocurred!"));
  };
  return (
    <div className="flex items-center h-[60vh] justify-center w-screen">
      <div>
        <h1 className="text-4xl text-[#F33823] font-inter font-bold text-center mb-16 underline uppercase">
          Login or Sign Up
        </h1>
        <button
          onClick={handleGoogleSignIn}
          className="disabled:cursor-not-allowed w-full flex  items-center  jus border mb-4 md:px-8  px-1 py-2 hover:shadow-xl  rounded-lg font-semibold cursor-pointer"
        >
          <FcGoogle size={40} />

          <p className="text-center w-full text-xl">Continue with Google</p>
        </button>
      </div>
    </div>
  );
};

export default Login;
