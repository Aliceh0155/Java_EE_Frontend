import axios from "axios"
import React, { useState } from "react"

const RegisterUser = () => {
  const [formData, setFormData] = useState({ username: "", password: "" })

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      await axios.post("http://localhost:8080/register", formData)
      alert("User registered successfully!")
    } catch (error) {
      alert("Registration failed.")
    }
  }
  return <div>RegisterUser</div>
}

export default RegisterUser
