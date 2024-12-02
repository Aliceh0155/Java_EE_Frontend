import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-16 flex items-center bg-black px-4 z-10">
      <nav className="flex justify-between w-full">
        <div>
        <Link to="/">
        <img
          className="w-32 h-auto hover:opacity-80 transition-opacity"
          src="https://www.harrypotter.com/assets/_next/static/images/logo-gold-600-7a7e89b6db1ffeaab025f2091d21b645.png"
          alt="Harry Potter Logo"
        />
      </Link>
        </div>
        <div>
          <Link to="/login" className="text-white mr-4 hover:underline">
            Login
          </Link>
          <Link to="/register" className="text-white mr-4 hover:underline">
            Register
          </Link>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
