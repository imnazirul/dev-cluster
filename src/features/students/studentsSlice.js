import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 0,
    firstName: "MD",
    middleName: "Nazirul",
    lastName: "Islam",
    class: "XII",
    division: "D",
    roll: 149,
    address1: "Trishal",
    address2: "Not Available",
    landMark: 2313,
    city: "Mymensingh",
    pin: 2220,
  },
  {
    id: 1,
    firstName: "MD",
    middleName: "Nazirul",
    lastName: "Islam",
    class: "XII",
    division: "D",
    roll: 149,
    address1: "Trishal",
    address2: "Not Available",
    landMark: 2313,
    city: "Mymensingh",
    pin: 2220,
  },
  {
    id: 2,
    firstName: "MD",
    middleName: "Nazirul",
    lastName: "Islam",
    class: "XII",
    division: "D",
    roll: 149,
    address1: "Trishal",
    address2: "Not Available",
    landMark: 2313,
    city: "Mymensingh",
    pin: 2220,
  },
];

const studentsSlice = createSlice({
  name: "students",

  initialState,
  reducers: {
    addStudent: (state, action) => {
      state.push(action.payload);
    },
    updateStudent: (state, action) => {
      const newState = state.filter(
        (student) => student.id !== action.payload.id
      );
      state = newState;
      state.push(action.payload);
    },
    deleteStudent: (state, action) => {
      const newState = state.filter((student) => student.id !== action.pay);
      state = newState;
    },
  },
});

export default studentsSlice.reducer;
export const { addStudent, updateStudent, deleteStudent } =
  studentsSlice.actions;
