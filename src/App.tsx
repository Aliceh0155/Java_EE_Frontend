import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import LoginUser from "./components/LoginUser"
import RegisterUser from "./components/RegisterUser"
import GetOneCharacter from "./components/GetOneCharacter"
import Frontpage from "./components/Frontpage"

function App() {
  return (
    <div className="pt-16">
      <BrowserRouter>
        <Navbar />
        <Routes>
        <Route path="/" element={<Frontpage/>} />
          <Route path="/login" element={<LoginUser/>} />
          <Route path="/register" element={<RegisterUser/>} />
          <Route path="/characters/character/:id" element={<GetOneCharacter/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
