import { createSlice } from "@reduxjs/toolkit";
import { register, login, logout } from "./operations";

const handlePending = (state) => {
  state.isLoading = true;
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    isAuthenticated: false,
    isLoading: true,
    error: null,
  },
  extraReducers: {
    [register.pending]:handlePending,
    [register.fulfilled](state, action) {
      state.user = action.payload;
      state.isAuthenticated = true;
      state.isLoading = false;
      state.error = null;
    },
    [register.rejected]:handleRejected,
    [login.pending]:handlePending,
    [login.fulfilled](state, action) {
      state.user = action.payload;
      state.isAuthenticated = true;
      state.isLoading = false;
      state.error = null;
    },
    [login.rejected]:handleRejected,
    [logout.pending]:handlePending,
    [logout.fulfilled](state, action) {
      state.user = null;
      state.isAuthenticated = false;
      state.isLoading = false;
      state.error = null;
    },
    [logout.rejected]:handleRejected,
  },
});

export const userReducer = userSlice.reducer;