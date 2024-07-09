import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addStudent } from "../../features/students/studentsSlice";
import toast from "react-hot-toast";

const AddStudent = () => {
  const date = new Date().toDateString();
  const time = new Date().toLocaleTimeString();
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const handleAddStudent = (data) => {
    dispatch(addStudent(data));
    toast.success("Student Added Successfully!");
    reset();
  };

  return (
    <div className="mt-10 w-full font-ibm px-8">
      <div className="flex items-center justify-between w-full">
        <h1 className="text-lg font-semibold text-black">Add Student</h1>
        <p className="font-medium">
          {date} {time}
        </p>
      </div>

      <form onSubmit={handleSubmit(handleAddStudent)} className="mt-6">
        <div className="grid grid-cols-3 gap-4">
          <input
            {...register("firstName", {
              required: {
                value: true,
                message: "First Name is Required",
              },
            })}
            type="text"
            placeholder={`${
              errors.firstName ? errors.firstName.message : "First Name"
            }`}
            className={`${
              errors.firstName ? "placeholder:text-red-500" : ""
            } px-4 py-3 border rounded-md outline-none `}
          />
          <input
            {...register("middleName", {
              required: {
                value: true,
                message: "Middle Name is Required",
              },
            })}
            type="text"
            placeholder={`${
              errors.middleName ? errors.middleName.message : "Middle Name"
            }`}
            className={`${
              errors.middleName ? "placeholder:text-red-500" : ""
            } px-4 py-3 border rounded-md outline-none `}
          />
          <input
            {...register("lastName", {
              required: {
                value: true,
                message: "Last Name is Required",
              },
            })}
            type="text"
            placeholder={`${
              errors.lastName ? errors.lastName.message : "Last Name"
            }`}
            className={`${
              errors.lastName ? "placeholder:text-red-500" : ""
            } px-4 py-3 border rounded-md outline-none `}
          />
          <select
            {...register("class", {
              required: {
                value: true,
                message: "Class is Required",
              },
            })}
            defaultValue=""
            className={`${
              errors.class ? "border border-red-500" : ""
            } px-4 py-3 border rounded-md outline-none `}
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
            {...register("division", {
              required: {
                value: true,
                message: "Division is Required",
              },
            })}
            defaultValue=""
            className={`${
              errors.division ? "border border-red-500" : ""
            } px-4 py-3 border rounded-md outline-none `}
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
            {...register("roll", {
              required: {
                value: true,
                message: "Roll is Required",
              },
            })}
            type="number"
            placeholder={`${
              errors.roll ? errors.roll.message : "Enter Roll Number in Digits"
            }`}
            className={`${
              errors.roll ? "placeholder:text-red-500" : ""
            } px-4 py-3 border rounded-md outline-none `}
          />
        </div>
        <div className="grid grid-cols-6 gap-4 mt-8">
          <input
            {...register("address1", {
              required: {
                value: true,
                message: "Address is Required",
              },
            })}
            type="text"
            className={`${
              errors.address1 ? "placeholder:text-red-500" : ""
            } col-span-3 px-4 py-3 border rounded-md  outline-none`}
            placeholder={`${
              errors.address1 ? errors.address1.message : "Address Line 1"
            }`}
          />
          <input
            {...register("address2")}
            type="text"
            className="col-span-3 px-4 py-3 border rounded-md  outline-none"
            placeholder="Address Line 2"
          />
          <input
            {...register("landMark", {
              required: {
                value: true,
                message: "LandMark is Required",
              },
            })}
            type="text"
            className="col-span-2 px-4 py-3 border rounded-md  outline-none"
            placeholder="Landmark"
          />
          <input
            {...register("city", {
              required: {
                value: true,
                message: "City is Required",
              },
            })}
            type="text"
            className={`${
              errors.address1 ? "placeholder:text-red-500" : ""
            } col-span-2 px-4 py-3 border rounded-md  outline-none`}
            placeholder={`${errors.city ? errors.city.message : "City"}`}
          />
          <input
            {...register("pin", {
              required: {
                value: true,
                message: "pin is Required",
              },
            })}
            type="text"
            className="col-span-2 px-4 py-3 border rounded-md  outline-none"
            placeholder="Pincode"
          />
        </div>

        <button className="bg-[#F33823] text-white rounded-md px-8 py-2 w-80 mt-6 font-medium">
          Add Student
        </button>
      </form>
    </div>
  );
};

export default AddStudent;
