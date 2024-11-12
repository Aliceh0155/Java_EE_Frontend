import { useState } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Loginpage from "./components/Loginpage"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Router>
        <Navbar /> {/* Navbar visas på alla sidor */}
        <Routes>
          <Route path="/login" element={<Loginpage />} /> 
        </Routes>
      </Router>
    </div>
  )
}

export default App
