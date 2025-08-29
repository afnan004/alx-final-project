import { useState, useEffect } from 'react';

export default function RecipeDetails({ recipeId }) {
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        setLoading(true);
        
        const response = await fetch(`/api/recipes/${recipeId}`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`); 
        }
        const data = await response.json();
        setRecipe(data);
      } catch (err) {
        console.error("Failed to fetch recipe:", err);
        setError(err.message); 
      } finally {
        setLoading(false);
      }
    };

    fetchRecipe();
  }, [recipeId]); 

  if (loading) {
    return (
      <div className="p-6 max-w-3xl mx-auto">
        <div className="animate-pulse"> {}
          <div className="h-8 bg-gray-200 rounded w-3/4 mb-4"></div>
          <div className="h-48 bg-gray-200 rounded-xl mb-4"></div>
          <div className="h-6 bg-gray-200 rounded w-1/2 mb-2"></div>
          <div className="h-4 bg-gray-200 rounded w-full mb-1"></div>
          <div className="h-4 bg-gray-200 rounded w-2/3"></div>
        </div>
      </div>
    );
  }

  
  if (error) {
    return (
      <div className="p-6 max-w-3xl mx-auto">
        <div className="text-red-600 bg-red-100 p-4 rounded-xl">
          <h2 className="font-bold">Oops! Something went wrong.</h2>
          <p>Couldn't load the recipe. Error: {error}</p>
          { }
        </div>
      </div>
    );
  }

  
  const { name, imageUrl, ingredients, instructions, videoId } = recipe;

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">{name || 'Untitled Recipe'}</h1>

      {imageUrl ? (
        <img
          src={imageUrl}
          alt={`A picture of ${name}`}
          className="rounded-xl mb-4 w-full object-cover" 
        />
      ) : (
        <div className="rounded-xl mb-4 bg-gray-100 h-48 flex items-center justify-center text-gray-400">
          No image available
        </div>
      )}

      <h2 className="text-xl font-semibold mb-2">Ingredients</h2>
      <ul className="list-disc list-inside mb-6 pl-4"> {}
        {ingredients?.map((item, index) => (
          <li key={index}>{item}</li> 
        ))}
      </ul>

      <h2 className="text-xl font-semibold mb-2">Instructions</h2>
      <p className="mb-6 whitespace-pre-line">{instructions}</p> {}

      {videoId && (
        <div className="aspect-video">
          <iframe
            className="w-full h-full rounded-xl"
            src={`https://www.youtube.com/embed/${videoId}`}
            title={`YouTube video for ${name}`} 
            allowFullScreen
          ></iframe>
        </div>
      )}
    </div>
  );
}