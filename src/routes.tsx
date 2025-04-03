import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignUpPage";
import RecipeFormPage from "./pages/RecipeForm"; // ✅ Renamed for clarity
import RecipeDetailsPage from "./pages/RecipeDetails";
import LandingPage from "./pages/LandingPage";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      {/* ✅ Landing Page Loads First */}
      <Route path="/" element={<LandingPage />} />

      {/* ✅ Home Page */}
      <Route path="/home" element={<HomePage />} />

      {/* ✅ Signup and Login */}
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/login" element={<LoginPage />} />

      {/* ✅ Add Recipe */}
      <Route path="/add" element={<RecipeFormPage />} />

      {/* ✅ Edit Recipe - NEWLY ADDED */}
      <Route path="/edit/:id" element={<RecipeFormPage />} />

      {/* ✅ Recipe Details */}
      <Route path="/recipe/:id" element={<RecipeDetailsPage />} />

      {/* ✅ Redirect any unknown route to Landing Page */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default AppRoutes;
