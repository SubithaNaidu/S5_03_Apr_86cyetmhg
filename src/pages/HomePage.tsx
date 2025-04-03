import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { Recipe } from "../redux/recipeSlice";
import { Link } from "react-router-dom";
import "./Home.css";
import backgroundImage from "./istockphoto-1414787750-612x612.jpg";  // Import the image

const Home: React.FC = () => {
  const recipes = useSelector((state: RootState) => state.recipes.recipes);
  const [search, setSearch] = useState("");

  // Filter recipes based on search input
  const filteredRecipes = recipes.filter((recipe) =>
    recipe.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div
      className="home-container"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
      }}
    >
      <h1 className="page-title">Recipe Book</h1>

      {/* 🔍 Search Bar */}
      <input
        type="text"
        placeholder="Search recipes..."
        className="search-bar"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="recipe-list">
        {filteredRecipes.length === 0 ? (
          <p>No recipes available. Add a new one!</p>
        ) : (
          filteredRecipes.map((recipe: Recipe) => (
            <div key={recipe.id} className="recipe-card">
              <img src={recipe.imageUrl} alt={recipe.title} className="recipe-image" />
              <h3>{recipe.title}</h3>
              <p>{recipe.description}</p>
              <Link to={`/recipe/${recipe.id}`} className="view-details">View Details</Link>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Home;
