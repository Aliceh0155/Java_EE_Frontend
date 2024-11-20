import React from "react"
import Login from "./Loginpage"
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-16 flex items-center px-4">
      <nav className="flex justify-between w-full">
        <div ><img className="w-32 h-auto" src="https://www.harrypotter.com/assets/_next/static/images/logo-gold-600-7a7e89b6db1ffeaab025f2091d21b645.png" alt="Harry Potter Logo" /></div>
        <div>
          <Link to="/login" className="text-white mr-4">Login</Link>
          <Link to = "/register" className="text-white mr-4">Register</Link>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
