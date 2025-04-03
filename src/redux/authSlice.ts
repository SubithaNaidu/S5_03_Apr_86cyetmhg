import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Check local storage for persisted auth state
const storedUser = localStorage.getItem("loggedInUser");

interface AuthState {
  isAuthenticated: boolean;
}

const initialState: AuthState = {
  isAuthenticated: !!storedUser, // Convert storedUser to boolean
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state) => {
      state.isAuthenticated = true;
      localStorage.setItem("isAuthenticated", "true"); // Store login state
    },
    logout: (state) => {
      state.isAuthenticated = false;
      localStorage.removeItem("isAuthenticated"); // Clear auth state
      localStorage.removeItem("loggedInUser");
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
