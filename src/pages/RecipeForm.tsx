import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { addRecipe, updateRecipe } from "../redux/recipeSlice";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import { RootState } from "../redux/store";
import "./RecipeForm.css";

const RecipeForm: React.FC = () => {
  const { id } = useParams<{ id?: string }>();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const allRecipes = useSelector((state: RootState) => state.recipes.recipes);
  const existingRecipe = location.state?.recipe || allRecipes.find((r) => r.id === Number(id));

  const [imagePreview, setImagePreview] = useState<string | null>(existingRecipe?.imageUrl || null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [ingredients, setIngredients] = useState<string[]>(existingRecipe?.ingredients || []);
  const [newIngredient, setNewIngredient] = useState<string>("");

  const formik = useFormik({
    initialValues: {
      title: existingRecipe?.title || "",
      imageUrl: existingRecipe?.imageUrl || "",
      description: existingRecipe?.description || "",
      instructions: existingRecipe?.instructions || "",
    },
    enableReinitialize: true,
    validationSchema: Yup.object({
      title: Yup.string().required("* Title is required"),
      description: Yup.string().required("* Description is required"),
      instructions: Yup.string().required("* Instructions are required"),
    }),
    onSubmit: (values) => {
      let finalImageUrl = imagePreview || values.imageUrl || "";
      if (selectedFile) {
        const reader = new FileReader();
        reader.onloadend = () => {
          finalImageUrl = reader.result as string;
          saveRecipe(finalImageUrl);
        };
        reader.readAsDataURL(selectedFile);
      } else {
        saveRecipe(finalImageUrl);
      }
    },
  });

  const saveRecipe = (finalImageUrl: string) => {
    const recipe = {
      id: existingRecipe ? existingRecipe.id : Date.now(),
      title: formik.values.title,
      description: formik.values.description,
      ingredients,
      instructions: formik.values.instructions,
      imageUrl: finalImageUrl,
    };
    id ? dispatch(updateRecipe(recipe)) : dispatch(addRecipe(recipe));
    navigate("/home");
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const addIngredient = () => {
    if (newIngredient.trim()) {
      setIngredients([...ingredients, newIngredient.trim()]);
      setNewIngredient("");
    }
  };

  return (
    <form className="recipe-form" onSubmit={formik.handleSubmit}>
      <input type="text" placeholder="Title *" {...formik.getFieldProps("title")} />
      {formik.touched.title && formik.errors.title && <p>{formik.errors.title.toString()}</p>}

      <div className="image-input">
        <input
          type="text"
          placeholder="Image URL (or upload a file)"
          {...formik.getFieldProps("imageUrl")}
          onChange={(e) => {
            formik.handleChange(e);
            setImagePreview(e.target.value);
            setSelectedFile(null);
          }}
        />
        <input type="file" accept="image/*" onChange={handleFileChange} />
      </div>

      {imagePreview && (
        <div className="image-preview">
          <img src={imagePreview} alt="Preview" />
        </div>
      )}

      <textarea placeholder="Description *" {...formik.getFieldProps("description")} />
      {formik.touched.description && formik.errors.description && <p>{formik.errors.description.toString()}</p>}

      <div className="ingredients-section">
        <p>Ingredients *</p>
        {ingredients.map((ingredient, index) => (
          <p key={index}>{ingredient}</p>
        ))}
        <input
          type="text"
          placeholder="Add ingredient"
          value={newIngredient}
          onChange={(e) => setNewIngredient(e.target.value)}
        />
        <button type="button" onClick={addIngredient}>Add Ingredient</button>
      </div>

      <textarea placeholder="Instructions *" {...formik.getFieldProps("instructions")} />
      {formik.touched.instructions && formik.errors.instructions && <p>{formik.errors.instructions.toString()}</p>}

      <button type="submit">{id ? "Update Recipe" : "Add Recipe"}</button>
    </form>
  );
};

export default RecipeForm;
