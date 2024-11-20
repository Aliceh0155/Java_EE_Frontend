import { useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Loginpage from "./components/Loginpage"
import DisplayAllCharacters from "./components/DisplayAllCharacters"
import Registerpage from "./components/Registerpage"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/login" element={<Loginpage />} />
          <Route path="/register" element={<Registerpage />} />
        </Routes>
      </BrowserRouter>
      <div>
        <DisplayAllCharacters />
      </div>
    </div>
  )
}

export default App
