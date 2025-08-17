export default function SearchBar() {
    return (
      <div className="flex justify-center gap-2 p-4">
        <input
          type="text"
          placeholder="Search recipes..."
          className="border rounded-xl px-4 py-2 w-1/2 shadow-sm focus:outline-none"
        />
        <button className="bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700">
          Search
        </button>
      </div>
    );
  }

  