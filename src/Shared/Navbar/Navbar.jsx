import { FiUser } from "react-icons/fi";
import { useSelector } from "react-redux";

const Navbar = () => {
  const user = useSelector((state) => state.auth);

  return (
    <div className="fixed w-full backdrop-blur-xl bg-white bg-opacity-40 ">
      <nav className="flex justify-between container mx-auto px-8 py-5  items-center">
        <h1 className="text-2xl text-[#F33823] font-bold">Dev Cluster</h1>
        <p className="border px-4 py-2 rounded-md items-center flex gap-1">
          <FiUser className="text-2xl" /> {user.user && user?.user?.email}
        </p>
      </nav>
    </div>
  );
};

export default Navbar;
