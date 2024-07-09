import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  students: [],
};

const studentsSlice = createSlice({
  name: "students",

  initialState,
  reducers: {
    addStudent: (state, action) => {
      state.students.push(action.payload);
    },
    updateStudent: (state, action) => {
      state.students = state.students.filter(
        (student) => student.id !== action.payload.id
      );

      state.students.push(action.payload);
    },
    deleteStudent: (state, action) => {
      state.students = state.students.filter(
        (student) => student.id !== action.payload
      );
    },
  },
});

export default studentsSlice.reducer;
export const { addStudent, updateStudent, deleteStudent } =
  studentsSlice.actions;
