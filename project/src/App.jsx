import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import RecipePage from "./pages/RecipePage";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 text-gray-800">
        <Routes>
          {/* Home with search + recipe list */}
          <Route path="/" element={<HomePage />} />

          {/* Recipe details page */}
          <Route path="/recipe/:id" element={<RecipePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
