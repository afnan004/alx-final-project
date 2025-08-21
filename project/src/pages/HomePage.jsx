import { useState, useEffect } from "react";
import SearchBar from "../components/SearchBar.jsx";
import RecipeList from "../components/RecipeList.jsx";

export default function HomePage() {
  const [recipes, setRecipes] = useState([]);

  // fetch recipes from API
  const fetchRecipes = async (query) => {
    try {
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
      );
      const data = await res.json();
      setRecipes(data.meals || []); // prevent null error
    } catch (error) {
      console.error("Error fetching recipes:", error);
    }
  };

  // load some default recipes on mount
  useEffect(() => {
    fetchRecipes("chicken"); // default search
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">🍳 Recipe Finder</h1>
      <SearchBar onSearch={fetchRecipes} />
      <RecipeList recipes={recipes} />
    </div>
  );
}
