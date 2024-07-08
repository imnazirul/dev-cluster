import { FiUser } from "react-icons/fi";

const Navbar = () => {
  return (
    <nav className="flex justify-between container mx-auto px-8 py-6 items-center">
      <h1 className="text-2xl text-[#F33823] font-bold">Dev Cluster</h1>
      <p className="border px-4 py-2 rounded-md items-center flex gap-1">
        <FiUser className="text-2xl" /> username@dev-cluster.com
      </p>
    </nav>
  );
};

export default Navbar;
