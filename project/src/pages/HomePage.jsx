import SearchBar from "../components/SearchBar";
import RecipeList from "../components/RecipeList";

export default function HomePage() {
  return (
    <div>
      <h1 className="text-center text-3xl font-bold py-6">Recipe Finder</h1>
      <SearchBar />
      <RecipeList />
    </div>
  );
}
