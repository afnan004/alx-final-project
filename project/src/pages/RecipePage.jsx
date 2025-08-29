import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function RecipePage() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [error, setError] = useState(null);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    async function fetchRecipe() {
      try {
        const res = await fetch(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
        );
        if (!res.ok) throw new Error("Failed to fetch recipe");
        const data = await res.json();
        if (!data.meals) {
          setError("Recipe not found.");
          setRecipe(null);
        } else {
          const meal = data.meals[0];
          setRecipe(meal);
          setError(null);

          // check if already in favorites
          const savedFavorites =
            JSON.parse(localStorage.getItem("favorites")) || [];
          setIsFavorite(savedFavorites.some((fav) => fav.idMeal === meal.idMeal));
        }
      } catch (err) {
        setError("Something went wrong. Please try again later.");
      }
    }
    fetchRecipe();
  }, [id]);

  const handleFavorite = () => {
    const savedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    if (isFavorite) {
    
      const updated = savedFavorites.filter((fav) => fav.idMeal !== recipe.idMeal);
      localStorage.setItem("favorites", JSON.stringify(updated));
      setIsFavorite(false);
    } else {

      savedFavorites.push(recipe);
      localStorage.setItem("favorites", JSON.stringify(savedFavorites));
      setIsFavorite(true);
    }
  };

  if (error) {
    return (
      <div className="p-6 max-w-3xl mx-auto text-center">
        <p className="text-red-500">{error}</p>
        <Link to="/" className="text-blue-600 hover:underline block mt-4">
          ← Back to Home
        </Link>
      </div>
    );
  }

  if (!recipe) return <p className="text-center">Loading recipe...</p>;

  return (
    <div className="p-6 max-w-3xl mx-auto">
      {}
      <Link to="/" className="text-blue-600 hover:underline block mb-4">
        ← Back to Home
      </Link>

      {}
      <h1 className="text-3xl font-bold mb-4">{recipe.strMeal}</h1>
      <img
        src={recipe.strMealThumb}
        alt={recipe.strMeal}
        className="rounded-lg mb-4 w-full"
      />

      {}
      <button
        onClick={handleFavorite}
        className={`px-4 py-2 mb-4 rounded-lg text-white ${
          isFavorite ? "bg-red-600" : "bg-gray-600"
        }`}
      >
        {isFavorite ? "Remove from Favorites " : "Add to Favorites "}
      </button>

      {}
      <p className="mb-2">
        <strong>Category:</strong> {recipe.strCategory}
      </p>
      <p className="mb-4">
        <strong>Area:</strong> {recipe.strArea}
      </p>

      {}
      <h2 className="text-2xl font-semibold mt-4">Instructions</h2>
      <p className="mt-2 whitespace-pre-line">{recipe.strInstructions}</p>

      {}
      <h2 className="text-2xl font-semibold mt-6 mb-2">Ingredients</h2>
      <ul className="list-disc list-inside">
        {Array.from({ length: 20 }, (_, i) => i + 1)
          .map((i) => ({
            ingredient: recipe[`strIngredient${i}`],
            measure: recipe[`strMeasure${i}`],
          }))
          .filter((item) => item.ingredient && item.ingredient.trim() !== "")
          .map((item, i) => (
            <li key={i}>
              {item.ingredient} - {item.measure}
            </li>
          ))}
      </ul>

      {}
      {recipe.strYoutube && (
        <div className="mt-6">
          <h2 className="text-2xl font-semibold mb-2">Video Tutorial</h2>
          <iframe
            className="w-full aspect-video rounded-lg"
            src={`https://www.youtube.com/embed/${recipe.strYoutube.split("v=")[1]}`}
            title={recipe.strMeal}
            allowFullScreen
          ></iframe>
        </div>
      )}
    </div>
  );
}
