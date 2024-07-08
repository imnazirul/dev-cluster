import { CiSearch } from "react-icons/ci";

const ManageStudents = () => {
  const date = new Date().toDateString();
  const time = new Date().toLocaleTimeString();
  return (
    <div className="mt-10 w-full font-ibm px-8">
      <div className="flex items-center justify-between w-full">
        <h1 className="text-lg font-semibold text-black">Manage Students</h1>
        <div className="h-10 hidden max-w-72 border border-[#D4D8DD] bg-[#EFF3F6] rounded-md lg:flex">
          <button className=" px-3 ">
            <CiSearch className=" text-2xl  h-full  text-[#637381]" />
          </button>
          <input
            type="search"
            placeholder="Search"
            className="flex-1 h-full   bg-transparent w-full outline-none px-2"
          />{" "}
        </div>
        <button className="text-[#4E5159] text-sm font-light px-6 py-2 border rounded-md">
          Export
        </button>
        <p className="font-medium">
          {date} {time}
        </p>
      </div>
    </div>
  );
};

export default ManageStudents;
