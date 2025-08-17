export default function RecipeDetails() {
    return (
      <div className="p-6 max-w-3xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">Recipe Name</h1>
        <img
          src="https://via.placeholder.com/400x250"
          alt="recipe"
          className="rounded-xl mb-4"
        />
        <h2 className="text-xl font-semibold">Ingredients</h2>
        <ul className="list-disc list-inside mb-4">
          <li>Ingredient 1</li>
          <li>Ingredient 2</li>
        </ul>
        <h2 className="text-xl font-semibold">Instructions</h2>
        <p className="mb-4">Step by step instructions here...</p>
        <div className="aspect-video">
          <iframe
            className="w-full h-full rounded-xl"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="YouTube video"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    );
  }

  