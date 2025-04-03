import { configureStore } from "@reduxjs/toolkit";
import recipeReducer from "./recipeSlice";
import authReducer from "./authSlice"; // ✅ Import authSlice

export const store = configureStore({
  reducer: {
    recipes: recipeReducer,
    auth: authReducer, // ✅ Add auth reducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
