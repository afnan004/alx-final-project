import RecipeCard from "./RecipeCard";

export default function RecipeList() {
  return (
    <div className="grid gap-6 p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      <RecipeCard />
      <RecipeCard />
      <RecipeCard />
    </div>
  );
}
