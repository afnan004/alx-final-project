export default function RecipeCard() {
    return (
      <div className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-lg transition">
        <img
          src="https://via.placeholder.com/300x200"
          alt="recipe"
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h2 className="text-lg font-semibold">Recipe Title</h2>
          <p className="text-sm text-gray-500">Category • Cuisine</p>
        </div>
      </div>
    );
  }
  