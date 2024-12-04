"use client"
import { ChangeEvent, FormEvent, useState } from "react"
import { useNavigate } from "react-router-dom"
export interface IUser {
  username: string
  password: string
}

const LoginUser = () => {
  const [user, setUser] = useState<IUser>({ username: "", password: "" })
  const navigate = useNavigate()
  // Handle changes in input fields (username, password)
  const handleUserChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setUser((prevData) => ({ ...prevData, [name]: value }))
  }
  // Handle form submission
  const onSubmit = async (event: FormEvent) => {
    event.preventDefault()
    // Credential Validation
    if (!user.username || !user.password) {
      return
    }
    try {
      // Create the body to send in the POST request
      const createUrlEncodedBody = new URLSearchParams({
        username: user.username,
        password: user.password,
      })
      // Timeout Setup
      const controller = new AbortController()
      const signal = controller.signal

      // Post
      const response = await fetch("http://localhost:8080/login", {
        method: "POST",
        body: JSON.stringify({
          username: user.username,
          password: user.password,
        }),
        headers: {
          "Content-Type": "application/json", // Skickar JSON
        },
      })

      console.log(response)

      // Bad Credentials
      if ((await response.status) == 401) {
        return
      }
      if (response.status === 401) {
        alert("Invalid credentials. Please try again.")
      }

      // SUCCESS
      const data = await response.text() // Get the token from the response
      console.log("Login successful:", data)
      // Spara token i localStorage eller sessionStorage
      localStorage.setItem("jwtToken", data)
      // Omdirigera användaren till startsidan
      navigate("/")
    } catch (error) {
      console.error("Error occurred during login:", error)
    }
  }
  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
        <header className="text-2xl font-bold text-center mb-6">
          Please Login
        </header>
        <form onSubmit={onSubmit} className="space-y-4">
          {/* Username */}
          <div>
            <label
              htmlFor="username"
              className="block text-gray-700 font-medium mb-2"
            >
              Username
            </label>
            <input
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              type="text"
              name="username"
              value={user.username}
              onChange={handleUserChange}
              required
            />
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="block text-gray-700 font-medium mb-2"
            >
              Password
            </label>
            <input
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              type="password"
              name="password"
              value={user.password}
              onChange={handleUserChange}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  )
}

export default LoginUser
