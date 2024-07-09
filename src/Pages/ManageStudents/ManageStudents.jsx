import { BiEditAlt } from "react-icons/bi";
import { CiSearch } from "react-icons/ci";
import { IoEyeOutline } from "react-icons/io5";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteStudent,
  updateStudent,
} from "../../features/students/studentsSlice";
import { RxCross1 } from "react-icons/rx";
import { useState } from "react";

const ManageStudents = () => {
  const date = new Date().toDateString();
  const time = new Date().toLocaleTimeString();
  const students = useSelector((state) => state.students.students);
  const dispatch = useDispatch();
  const [itemData, setItemData] = useState({});

  const handleDeleteStudent = (id) => {
    dispatch(deleteStudent(id));
  };

  const handleUpdateStudent = (e) => {
    e.preventDefault();
    const form = e.target;
    const updatedData = {
      id: itemData.id,
      firstName: form.firstName.value,
      middleName: form.middleName.value,
      lastName: form.lastName.value,
      class: form.class.value,
      division: form.division.value,
      roll: form.roll.value,
      address1: form.address1.value,
      address2: form.address2.value,
      landMark: form.landMark.value,
      city: form.city.value,
      pin: form.pin.value,
    };
    dispatch(updateStudent(updatedData));
    document.getElementById("my_modal_4").close();
  };

  const handleUpdate = (id) => {
    const studentData = students.find((student) => student.id === id);
    setItemData(studentData);
    document.getElementById("my_modal_4").showModal();
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
                  <button
                    onClick={() => {
                      const studentData = students.find(
                        (item) => item.id === student.id
                      );
                      setItemData(studentData);
                      document.getElementById("my_modal_1").showModal();
                    }}
                    className="hover:bg-gray-100 p-1 rounded-md text-[#F33823] text-[26px]"
                  >
                    <IoEyeOutline />
                  </button>
                  <button
                    onClick={() => handleUpdate(student.id)}
                    className="hover:bg-gray-100 p-1 rounded-md text-[#F33823] text-[26px]"
                  >
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

      <dialog id="my_modal_4" className="modal ">
        <div className="max-md:absolute top-0 md:relative  ">
          <div className="bg-white p-6 rounded-lg">
            <button
              onClick={() => document.getElementById("my_modal_4").close()}
              className="hidden lg:flex absolute top-3 right-4"
            >
              <RxCross1 className="text-2xl cursor-pointer text-[#6D747A] "></RxCross1>
            </button>

            <form onSubmit={(e) => handleUpdateStudent(e)} className="mt-6 m-5">
              <div className="grid grid-cols-3 gap-4">
                <input
                  name="firstName"
                  required
                  defaultValue={itemData.firstName}
                  type="text"
                  placeholder="First Name"
                  className={` px-4 py-3 border rounded-md outline-none `}
                />
                <input
                  name="middleName"
                  required
                  defaultValue={itemData.middleName}
                  type="text"
                  placeholder={`Middle Name`}
                  className={` px-4 py-3 border rounded-md outline-none `}
                />
                <input
                  name="lastName"
                  required
                  defaultValue={itemData.lastName}
                  type="text"
                  placeholder={`"Last Name"
                  }`}
                  className={`} px-4 py-3 border rounded-md outline-none `}
                />
                <select
                  name="class"
                  required
                  defaultValue={itemData.class}
                  className={` px-4 py-3 border rounded-md outline-none `}
                >
                  <option disabled value="">
                    Select Class
                  </option>
                  <option value="I">I</option>
                  <option value="II">II</option>
                  <option value="III">III</option>
                  <option value="IV">IV</option>
                  <option value="V">V</option>
                  <option value="VI">VI</option>
                  <option value="VII">VII</option>
                  <option value="VIII">VIII</option>
                  <option value="IX">IX</option>
                  <option value="X">X</option>
                  <option value="XI">XI</option>
                  <option value="XII">XII</option>
                </select>
                <select
                  name="division"
                  required
                  defaultValue={itemData.division}
                  className={`$px-4 py-3 border rounded-md outline-none `}
                >
                  <option disabled value="" className="text-gray-400">
                    Select Division
                  </option>
                  <option value="A">A</option>
                  <option value="B">B</option>
                  <option value="C">C</option>
                  <option value="D">D</option>
                  <option value="E">E</option>
                </select>
                <input
                  name="roll"
                  required
                  defaultValue={itemData.roll}
                  type="number"
                  placeholder={`Enter Roll Number in Digits`}
                  className={` px-4 py-3 border rounded-md outline-none `}
                />
              </div>
              <div className="grid grid-cols-6 gap-4 mt-8">
                <input
                  name="address1"
                  required
                  defaultValue={itemData.address1}
                  type="text"
                  className={` col-span-3 px-4 py-3 border rounded-md  outline-none`}
                  placeholder={`Address Line 1`}
                />
                <input
                  name="address2"
                  required
                  defaultValue={itemData.address2}
                  type="text"
                  className="col-span-3 px-4 py-3 border rounded-md  outline-none"
                  placeholder="Address Line 2"
                />
                <input
                  name="landMark"
                  required
                  defaultValue={itemData.landMark}
                  type="text"
                  className="col-span-2 px-4 py-3 border rounded-md  outline-none"
                  placeholder="Landmark"
                />
                <input
                  name="city"
                  required
                  type="text"
                  defaultValue={itemData.city}
                  className={` col-span-2 px-4 py-3 border rounded-md  outline-none`}
                  placeholder={`City`}
                />
                <input
                  name="pin"
                  required
                  defaultValue={itemData.pin}
                  type="text"
                  className="col-span-2 px-4 py-3 border rounded-md  outline-none"
                  placeholder="Pincode"
                />
              </div>

              <button className="bg-[#F33823] text-white rounded-md px-8 py-2 w-80 mt-6 font-medium">
                Update Student
              </button>
            </form>
          </div>
        </div>
      </dialog>

      <dialog id="my_modal_1" className="modal ">
        <div className="max-md:absolute top-0 md:relative  ">
          <div className="bg-white p-6 rounded-lg">
            <button
              onClick={() => document.getElementById("my_modal_1").close()}
              className="hidden lg:flex absolute top-3 right-4"
            >
              <RxCross1 className="text-2xl cursor-pointer text-[#6D747A] "></RxCross1>
            </button>

            <form onSubmit={(e) => handleUpdateStudent(e)} className="mt-6 m-5">
              <div className="grid grid-cols-3 gap-4">
                <input
                  name="firstName"
                  readOnly
                  defaultValue={itemData.firstName}
                  type="text"
                  placeholder="First Name"
                  className={` px-4 py-3 border rounded-md outline-none `}
                />
                <input
                  name="middleName"
                  readOnly
                  defaultValue={itemData.middleName}
                  type="text"
                  placeholder={`Middle Name`}
                  className={` px-4 py-3 border rounded-md outline-none `}
                />
                <input
                  name="lastName"
                  readOnly
                  defaultValue={itemData.lastName}
                  type="text"
                  placeholder={`"Last Name"
                  }`}
                  className={`} px-4 py-3 border rounded-md outline-none `}
                />
                <select
                  name="class"
                  readOnly
                  defaultValue={itemData.class}
                  className={` px-4 py-3 border rounded-md outline-none `}
                >
                  <option disabled value="">
                    Select Class
                  </option>
                  <option value="I">I</option>
                  <option value="II">II</option>
                  <option value="III">III</option>
                  <option value="IV">IV</option>
                  <option value="V">V</option>
                  <option value="VI">VI</option>
                  <option value="VII">VII</option>
                  <option value="VIII">VIII</option>
                  <option value="IX">IX</option>
                  <option value="X">X</option>
                  <option value="XI">XI</option>
                  <option value="XII">XII</option>
                </select>
                <select
                  name="division"
                  readOnly
                  defaultValue={itemData.division}
                  className={`$px-4 py-3 border rounded-md outline-none `}
                >
                  <option disabled value="" className="text-gray-400">
                    Select Division
                  </option>
                  <option value="A">A</option>
                  <option value="B">B</option>
                  <option value="C">C</option>
                  <option value="D">D</option>
                  <option value="E">E</option>
                </select>
                <input
                  name="roll"
                  readOnly
                  defaultValue={itemData.roll}
                  type="number"
                  placeholder={`Enter Roll Number in Digits`}
                  className={` px-4 py-3 border rounded-md outline-none `}
                />
              </div>
              <div className="grid grid-cols-6 gap-4 mt-8">
                <input
                  name="address1"
                  readOnly
                  defaultValue={itemData.address1}
                  type="text"
                  className={` col-span-3 px-4 py-3 border rounded-md  outline-none`}
                  placeholder={`Address Line 1`}
                />
                <input
                  name="address2"
                  readOnly
                  defaultValue={itemData.address2}
                  type="text"
                  className="col-span-3 px-4 py-3 border rounded-md  outline-none"
                  placeholder="Address Line 2"
                />
                <input
                  name="landMark"
                  readOnly
                  defaultValue={itemData.landMark}
                  type="text"
                  className="col-span-2 px-4 py-3 border rounded-md  outline-none"
                  placeholder="Landmark"
                />
                <input
                  name="city"
                  required
                  type="text"
                  defaultValue={itemData.city}
                  className={` col-span-2 px-4 py-3 border rounded-md  outline-none`}
                  placeholder={`City`}
                />
                <input
                  name="pin"
                  readOnly
                  defaultValue={itemData.pin}
                  type="text"
                  className="col-span-2 px-4 py-3 border rounded-md  outline-none"
                  placeholder="Pincode"
                />
              </div>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default ManageStudents;
