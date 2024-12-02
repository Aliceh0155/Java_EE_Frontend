import axios from "axios"
import { useEffect, useState } from "react"
import { CharacterModel } from "../interfaces/CharacterModel"
import { useNavigate, useParams } from "react-router-dom"

const GetOneCharacter = () => {
  const [character, setCharacter] = useState<CharacterModel | null>(null)
  const { id } = useParams<{ id: string }>() 
  const navigate = useNavigate()  // Använd navigate för att omdirigera
  const token = localStorage.getItem("jwtToken")  // Kolla om token finns i localStorage

  // Om användaren inte är inloggad, omdirigera till login-sidan
  useEffect(() => {
    if (!token) {
      navigate("/login")  // Om token inte finns, skicka till login
    }
  }, [token, navigate])

  
  const fetchCharacter = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8080/character/${id}`
      )
      console.log(response.data)
      setCharacter(response.data)
    } catch (error) {
      console.error("Error Fetching: ", error)
    }
  }

  useEffect(() => {
    if (id && token) {
      fetchCharacter()
    }
  }, [id, token])
  const defaultImage =
    "https://images.desenio.com/zoom/wb0012-8harrypotter-hogwartscrest50x70-60944-71911.jpg"

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      {character ? (
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg">
          <h1 className="text-3xl font-bold text-center mb-4">
            {character.name}
          </h1>
          <div className="flex justify-center">
            <img
              src={character.image ? character.image : defaultImage}
              alt={character.name}
              className="w-48 h-48 object-cover rounded"
            />
          </div>
          <div className="mt-4 text-left space-y-2">
            <p>
              <strong>Species:</strong> {character.species}
            </p>
            <p>
              <strong>Gender:</strong> {character.gender}
            </p>
            <p>
              <strong>House:</strong> {character.house}
            </p>
            <p>
              <strong>Date of Birth:</strong> {character.dateOfBirth}
            </p>
            <p>
              <strong>Year of Birth:</strong> {character.yearOfBirth}
            </p>
            <p>
              <strong>Wizard:</strong> {character.wizard ? "Yes" : "No"}
            </p>
            <p>
              <strong>Ancestry:</strong> {character.ancestry}
            </p>
            <p>
              <strong>Eye Colour:</strong> {character.eyeColour}
            </p>
            <p>
              <strong>Hair Colour:</strong> {character.hairColour}
            </p>
            <p>
              <strong>Hogwarts Student:</strong>{" "}
              {character.hogwartsStudent ? "Yes" : "No"}
            </p>
            <p>
              <strong>Alive:</strong> {character.alive ? "Yes" : "No"}
            </p>
            <p>
              <strong>Wand:</strong>
            </p>
            <ul className="list-disc ml-4">
              <li>
                <strong>Wood:</strong> {character.wand.wood}
              </li>
              <li>
                <strong>Core:</strong> {character.wand.core}
              </li>
              <li>
                <strong>Length:</strong> {character.wand.length} inches
              </li>
            </ul>
          </div>
        </div>
      ) : (
        <p>Loading character...</p>
      )}
    </div>
  )
}

export default GetOneCharacter
