import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { FcGoogle } from "react-icons/fc";
import { useDispatch, useSelector } from "react-redux";
import auth from "../../firebase/firebase.config";
import { login } from "../../features/auth/authSlice";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const GProvider = new GoogleAuthProvider();

const Login = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth);
  const navigate = useNavigate();
  if (user?.user?.email) {
    navigate("/");
  }

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, GProvider)
      .then((res) => dispatch(login(res?.user)))
      .catch(() => toast.error("An Unknown Error Ocurred!"));
  };
  return (
    <div className="flex items-center h-[60vh] justify-center w-screen">
      <Toaster />
      <div>
        <h1 className="text-4xl text-[#F33823] font-inter font-bold text-center underline uppercase">
          Login or Sign Up
        </h1>
        <p className="text-center mb-16 font-inter text-lg">
          Login to Dev Cluster
        </p>
        <button
          onClick={handleGoogleSignIn}
          className="disabled:cursor-not-allowed w-full flex  items-center  jus border mb-4 md:px-8  px-1 py-2 hover:shadow-xl bg-gray-50 rounded-lg font-semibold cursor-pointer"
        >
          <FcGoogle size={40} />

          <p className="text-center w-full text-xl">Continue with Google</p>
        </button>
      </div>
    </div>
  );
};

export default Login;
