import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import { logout } from "../redux/authSlice";
import logo from "./download.jpeg"; // ✅ Import the logo
import "./Navbar.css";

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <nav className="navbar">
      {/* ✅ Logo & Text Side by Side */}
      <div className="navbar-brand" onClick={() => navigate("/home")} role="button" tabIndex={0}>
        <img src={logo} alt="Recipe Book Logo" className="logo-img" />
        <span className="brand-text">Recipe Book</span>
      </div>

      <ul className="navbar-links">
        <button onClick={() => navigate("/home")}>Home</button>
        <button onClick={() => navigate("/add")}>Add Recipe</button>

        {!isAuthenticated ? (
          <>
            <button onClick={() => navigate("/login")}>Login</button>
            <button onClick={() => navigate("/signup")}>Signup</button>
          </>
        ) : (
          <button onClick={handleLogout}>Logout</button>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
