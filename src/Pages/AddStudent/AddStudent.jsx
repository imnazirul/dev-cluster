import { useForm } from "react-hook-form";

const AddStudent = () => {
  const date = new Date().toDateString();
  const time = new Date().toLocaleTimeString();

  const {
    register,
    handleSubmit,
    // formState: { errors },
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
            placeholder="First Name"
            className="px-4 py-3 border rounded-md  ouline:none"
          />
          <input
            {...register("middleName", {
              required: {
                value: true,
                message: "Middle Name is Required",
              },
            })}
            type="text"
            placeholder="Middle Name"
            className="px-4 py-3 border rounded-md  ouline:none"
          />
          <input
            {...register("lastName", {
              required: {
                value: true,
                message: "Last Name is Required",
              },
            })}
            type="text"
            placeholder="Last Name"
            className="px-4 py-3 border rounded-md  ouline:none"
          />
          <select
            {...register("class", {
              required: {
                value: true,
                message: "Class is Required",
              },
            })}
            defaultValue=""
            className="px-4 py-3 border rounded-md  ouline:none "
          >
            <option disabled value="" className="text-gray-400">
              Select Class
            </option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
          </select>
          <select
            {...register("class", {
              required: {
                value: true,
                message: "Class is Required",
              },
            })}
            defaultValue=""
            className="px-4 py-3 border rounded-md  ouline:none "
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
            type="number"
            placeholder="Enter Roll Number in Digits"
            className="px-4 py-3 border rounded-md  ouline:none "
          />
        </div>
        <div className="grid grid-cols-6 gap-4 mt-8">
          <input
            type="text"
            className="col-span-3 px-4 py-3 border rounded-md  ouline:none"
            placeholder="Address Line 1"
          />
          <input
            type="text"
            className="col-span-3 px-4 py-3 border rounded-md  ouline:none"
            placeholder="Address Line 2"
          />
          <input
            type="text"
            className="col-span-2 px-4 py-3 border rounded-md  ouline:none"
            placeholder="Landmark"
          />
          <input
            type="text"
            className="col-span-2 px-4 py-3 border rounded-md  ouline:none"
            placeholder="City"
          />
          <input
            type="text"
            className="col-span-2 px-4 py-3 border rounded-md  ouline:none"
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
