import { useState, useEffect } from "react";
import SearchBar from "../components/SearchBar.jsx";
import RecipeList from "../components/RecipeList.jsx";

export default function HomePage() {
  const [recipes, setRecipes] = useState([]);

  const fetchRecipes = async (query) => {
    try {
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
      );
      const data = await res.json();
      setRecipes(data.meals || []);
    } catch (error) {
      console.error("Error fetching recipes:", error);
    }
  };

  useEffect(() => {
    fetchRecipes("chicken"); // default recipes
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-yellow-50 py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Discover Delicious Recipes
        </h1>
        <p className="text-lg mb-6 text-gray-600">
          Explore dishes from around the world and cook like a chef at home.
        </p>
        <a
          href="#search"
          className="bg-yellow-600 text-white px-6 py-3 rounded-lg shadow hover:bg-yellow-700 transition"
        >
          Start Cooking
        </a>
      </section>

      {/* Categories Section */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold mb-8 text-center">
          Browse by Category
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { name: "Beef", img: "https://www.themealdb.com/images/category/beef.png" },
            { name: "Chicken", img: "https://www.themealdb.com/images/category/chicken.png" },
            { name: "Dessert", img: "https://www.themealdb.com/images/category/dessert.png" },
            { name: "Seafood", img: "https://www.themealdb.com/images/category/seafood.png" },
          ].map((cat) => (
            <div
              key={cat.name}
              onClick={() => fetchRecipes(cat.name)}
              className="cursor-pointer bg-white rounded-lg shadow hover:shadow-lg transition transform hover:-translate-y-1"
            >
              <img
                src={cat.img}
                alt={cat.name}
                className="rounded-t-lg w-full object-cover"
              />
              <p className="p-4 font-medium text-center">{cat.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Search + Recipes */}
      <section id="search" className="p-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold mb-4">Find a Recipe</h2>
        <SearchBar onSearch={fetchRecipes} />
        <RecipeList recipes={recipes} />
      </section>
    </div>
  );
}
