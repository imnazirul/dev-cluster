import { useForm } from "react-hook-form";

const AddStudent = () => {
  const date = new Date().toDateString();
  const time = new Date().toLocaleTimeString();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleAddStudent = (data) => {
    console.log(data);
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
            <option value="1">I</option>
            <option value="2">II</option>
            <option value="3">III</option>
            <option value="4">IV</option>
            <option value="5">V</option>
            <option value="6">VI</option>
            <option value="7">VII</option>
            <option value="8">VIII</option>
            <option value="9">IX</option>
            <option value="10">X</option>
            <option value="11">XI</option>
            <option value="12">XII</option>
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
