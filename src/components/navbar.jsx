import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <nav className="w-full bg-white/80 backdrop-blur shadow-md px-6 py-4 flex justify-between items-center fixed top-0 left-0 z-50">
      
      {/* Logo */}
      <h1 className="text-xl font-bold text-gray-800">
        VAREWAY
      </h1>

      {/* Menu */}
      <div className="flex items-center gap-6 text-gray-700 font-medium">
        <Link to="/" className="hover:text-black transition">Home</Link>
        <Link to="/login" className="hover:text-black transition">Login</Link>
      </div>
    </nav>
  )
}