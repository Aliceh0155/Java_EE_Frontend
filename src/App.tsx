import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import LoginUser from "./components/LoginUser"
import RegisterUser from "./components/RegisterUser"

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/login" element={<LoginUser/>} />
          <Route path="/register" element={<RegisterUser/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
