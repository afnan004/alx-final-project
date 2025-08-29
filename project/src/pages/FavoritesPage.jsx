import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function FavoritesPage() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(savedFavorites);
  }, []);

  if (favorites.length === 0) {
    return <p className="text-center p-6">No favorite recipes yet ❤️</p>;
  }

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">My Favorite Recipes</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {favorites.map((recipe) => (
          <Link
            to={`/recipe/${recipe.idMeal}`}
            key={recipe.idMeal}
            className="bg-white rounded-lg shadow hover:shadow-lg transition"
          >
            <img
              src={recipe.strMealThumb}
              alt={recipe.strMeal}
              className="rounded-t-lg"
            />
            <p className="p-4 font-medium text-center">{recipe.strMeal}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
