import { createSlice } from "@reduxjs/toolkit";

const stored = localStorage.getItem("auth");
const initial = stored ? JSON.parse(stored) : { token: null, user: null };

const authSlice = createSlice({
  name: "auth",
  initialState: initial,
  reducers: {
    setCredentials(state, { payload }) {
      state.token = payload.token;
      state.user = payload.user;
      localStorage.setItem("auth", JSON.stringify(state));
    },
    updateUser(state, { payload }) {
      state.user = { ...state.user, ...payload };
      localStorage.setItem("auth", JSON.stringify(state));
    },
    logout(state) {
      state.token = null;
      state.user = null;
      localStorage.removeItem("auth");
    },
  },
});

export const { setCredentials, updateUser, logout } = authSlice.actions;
export default authSlice.reducer;

export const selectCurrentUser = (state) => state.auth.user;
export const selectToken = (state) => state.auth.token;
