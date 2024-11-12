import React from "react"
import Login from "./Loginpage"
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div className="bg-slate-500">
      Navbar
      <nav>
        <Link to="/login">Login</Link>
      </nav>
    </div>
  )
}

export default Navbar
