import { BiEditAlt } from "react-icons/bi";
import { CiSearch } from "react-icons/ci";
import { IoEyeOutline } from "react-icons/io5";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { deleteStudent } from "../../features/students/studentsSlice";

const ManageStudents = () => {
  const date = new Date().toDateString();
  const time = new Date().toLocaleTimeString();
  const students = useSelector((state) => state.students);
  const dispatch = useDispatch();

  const handleDeleteStudent = (id) => {
    dispatch(deleteStudent(id));
  };

  return (
    <div className="mt-10 w-full font-ibm px-8">
      <div className="flex items-center justify-between w-full">
        <h1 className="text-lg font-semibold text-black">Manage Students</h1>
        <div className="h-10 hidden max-w-80 border border-[#D4D8DD] bg-[#EFF3F6] rounded-md lg:flex">
          <button className=" px-3 ">
            <CiSearch className=" text-2xl  h-full  text-[#637381]" />
          </button>
          <input
            type="search"
            placeholder="Search"
            className="flex-1 h-full   bg-transparent w-full outline-none px-2"
          />{" "}
        </div>
        <button className="text-[#4E5159] w-20 text-center font-light font-inter py-3 border hover:shadow-xl rounded-md">
          Export
        </button>
        <button className="text-[#4E5159] w-20 hover:shadow-xl text-center font-light  px-6 py-3 border rounded-md">
          Filter
        </button>
        <button className="text-[#4E5159] text-center hover:shadow-xl w-24 font-light font-inter  py-3 border rounded-md">
          Print{" "}
        </button>
        <p className="font-medium">
          {date} {time}
        </p>
      </div>

      {/* table */}
      <div className="w-full overflow-y-auto">
        <table className="w-full mt-4 text-center">
          <thead className="bg-[#F33823] text-white  ">
            <tr>
              <th className="py-3">Name</th>
              <th className="py-3">Class</th>
              <th className="py-3">Roll No.</th>
              <th className="py-3 pr-6">View / Edit / Delete</th>
            </tr>
          </thead>
          <tbody>
            {" "}
            {students.map((student) => (
              <tr key={student.id}>
                <td className="py-3">
                  {student.firstName} {student.middleName} {student.lastName}
                </td>
                <td className="py-3">
                  {student.class}-{student.division}
                </td>
                <td className="py-3">{student.roll}</td>
                <td className="flex py-3 justify-center gap-8 items-center">
                  <button className="hover:bg-gray-100 p-1 rounded-md text-[#F33823] text-[26px]">
                    <IoEyeOutline />
                  </button>
                  <button className="hover:bg-gray-100 p-1 rounded-md text-[#F33823] text-[26px]">
                    <BiEditAlt />
                  </button>
                  <button onClick={() => handleDeleteStudent(student.id)}>
                    <RiDeleteBin6Line className="hover:bg-gray-100 p-[6px] rounded-md text-[#F33823] text-4xl" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageStudents;
