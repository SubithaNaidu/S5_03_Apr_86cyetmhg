import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Recipe {
  id: number;
  title: string;
  imageUrl: string;
  description: string;
  ingredients: string[];
  instructions: string;
}

interface RecipeState {
  recipes: Recipe[];
}

const initialState: RecipeState = {
  recipes: JSON.parse(localStorage.getItem("recipes") || "[]"), // Load from local storage
};

const recipeSlice = createSlice({
  name: "recipes",
  initialState,
  reducers: {
    setRecipes: (state, action: PayloadAction<Recipe[]>) => {
      state.recipes = action.payload;
      localStorage.setItem("recipes", JSON.stringify(state.recipes)); // ✅ Save to local storage
    },
    addRecipe: (state, action: PayloadAction<Recipe>) => {
      state.recipes.push(action.payload);
      localStorage.setItem("recipes", JSON.stringify(state.recipes)); // ✅ Save to local storage
    },
    updateRecipe: (state, action: PayloadAction<Recipe>) => {
      const index = state.recipes.findIndex((r) => r.id === action.payload.id);
      if (index !== -1) {
        state.recipes[index] = action.payload;
        localStorage.setItem("recipes", JSON.stringify(state.recipes)); // ✅ Save to local storage
      }
    },
    deleteRecipe: (state, action: PayloadAction<number>) => {
      // ✅ Remove recipe by filtering out the one with the given ID
      state.recipes = state.recipes.filter((recipe) => recipe.id !== action.payload);
      localStorage.setItem("recipes", JSON.stringify(state.recipes)); // ✅ Save to local storage
    },
  },
});

export const { addRecipe, updateRecipe, deleteRecipe, setRecipes } = recipeSlice.actions;
export default recipeSlice.reducer;
