import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function RecipePage() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    async function fetchRecipe() {
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
      );
      const data = await res.json();
      setRecipe(data.meals[0]);
    }
    fetchRecipe();
  }, [id]);

  if (!recipe) return <p className="text-center">Loading recipe...</p>;

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{recipe.strMeal}</h1>
      <img
        src={recipe.strMealThumb}
        alt={recipe.strMeal}
        className="rounded-lg mb-4"
      />
      <p className="mb-4">
        <strong>Category:</strong> {recipe.strCategory}
      </p>
      <p className="mb-4">
        <strong>Area:</strong> {recipe.strArea}
      </p>
      <h2 className="text-2xl font-semibold mt-4">Instructions</h2>
      <p className="mt-2">{recipe.strInstructions}</p>
    </div>
  );
}
