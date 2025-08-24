import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        <Link to="/" className="text-2xl font-bold text-yellow-600">
          Recipe Finder
        </Link>
        <div className="space-x-6">
          <Link to="/" className="hover:text-yellow-600">
            Home
          </Link>
          <Link to="/signin" className="hover:text-yellow-600">
            Sign In
          </Link>
        </div>
      </div>
    </nav>
  );
}
