import { Link } from "react-router-dom";

export default function RecipeCard({ recipe }) {
  return (
    <div className="border rounded-lg shadow-md p-4 hover:shadow-lg transition">
      <Link to={`/recipe/${recipe.idMeal}`}>
        <img
          src={recipe.strMealThumb}
          alt={recipe.strMeal}
          className="rounded-lg mb-2"
        />
        <h2 className="text-lg font-bold">{recipe.strMeal}</h2>
      </Link>
      <p className="text-sm text-gray-600">{recipe.strCategory} • {recipe.strArea}</p>
      <Link
        to={`/recipe/${recipe.idMeal}`}
        className="text-blue-600 hover:underline block mt-2"
      >
        View Details →
      </Link>
    </div>
  );
}


  