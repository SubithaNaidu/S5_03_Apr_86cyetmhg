import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { addRecipe, updateRecipe, deleteRecipe } from "../redux/recipeSlice";

export const useRecipes = () => {
  const dispatch = useDispatch();
  const recipes = useSelector((state: RootState) => state.recipes.recipes);

  const addNewRecipe = (recipe: any) => dispatch(addRecipe(recipe));
  const modifyRecipe = (recipe: any) => dispatch(updateRecipe(recipe));
  const removeRecipe = (id: string) => dispatch(deleteRecipe(Number(id))); // ✅ FIXED

  return { recipes, addNewRecipe, modifyRecipe, removeRecipe };
};
