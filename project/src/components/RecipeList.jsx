import RecipeCard from "./RecipeCard.jsx";

export default function RecipeList({ recipes }) {
  if (!recipes || recipes.length === 0) {
    return <p className="text-gray-500">No recipes found. Try searching!</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.idMeal} recipe={recipe} />
      ))}
    </div>
  );
}



