import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import { deleteRecipe } from "../redux/recipeSlice";
import { useNavigate, useParams } from "react-router-dom";
import "./RecipeDetails.css";

const RecipeDetails: React.FC = () => {
  const { id } = useParams<{ id?: string }>();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const recipe = useSelector((state: RootState) =>
    state.recipes.recipes.find((r) => r.id === Number(id))
  );

  if (!recipe) {
    return (
      <div className="not-found">
        <h2>Recipe not found</h2>
        <button onClick={() => navigate("/home")}>Go Back to Home</button>
      </div>
    );
  }

  // ✅ Handle Recipe Deletion with Confirmation
  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this recipe?")) {
      dispatch(deleteRecipe(recipe.id));
      navigate("/home");
    }
  };

  return (
    <div className="recipe-details">
      {recipe.imageUrl && <img src={recipe.imageUrl} alt={recipe.title} className="recipe-image" />}
      <h2>{recipe.title}</h2>
      <p className="recipe-description">{recipe.description}</p>

      <h3>Ingredients</h3>
      <ul>
        {recipe.ingredients.map((ing, i) => (
          <li key={i}>{ing}</li>
        ))}
      </ul>

      <h3>Instructions</h3>
      <p>{recipe.instructions}</p>

      <div className="details-buttons">
        {/* ✅ Correctly passes the recipe data to the Edit page */}
        <button 
          className="edit-btn"
          onClick={() => navigate(`/edit/${recipe.id}`, { state: { recipe } })}
        >
          Edit
        </button>

        <button className="delete-btn" onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
};

export default RecipeDetails;
