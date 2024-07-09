import { configureStore } from "@reduxjs/toolkit";
import StudentsReducer from "../features/students/studentsSlice";

const store = configureStore({
  reducer: {
    students: StudentsReducer,
  },
});

export default store;
