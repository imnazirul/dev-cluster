import { createSlice } from "@reduxjs/toolkit";
import { signOut } from "firebase/auth";
import auth from "../../firebase/firebase.config";
import toast from "react-hot-toast";

const initialState = {
  user: null,
  isAuthenticated: false,
  loading: true,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
      state.loading = false;
    },
    logout: () => {
      signOut(auth).then(() => toast.success("Logout Successfully"));
    },
  },
});

export default authSlice.reducer;

export const { login, logout } = authSlice.actions;
