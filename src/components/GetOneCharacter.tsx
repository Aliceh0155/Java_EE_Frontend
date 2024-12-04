import axios from "axios"
import { useEffect, useState } from "react"
import { CharacterModel } from "../interfaces/CharacterModel"
import { useNavigate, useParams } from "react-router-dom"
import backgroundImage from "../assets/images/wp8151821-harry-potter-aesthetic-pc-wallpapers.jpg"
import AddToFavourites from "./AddToFavourites"

const GetOneCharacter = () => {
  const [character, setCharacter] = useState<CharacterModel | null>(null)
  const { id } = useParams<{ id?: string }>()
  const navigate = useNavigate()
  const token = localStorage.getItem("jwtToken")

  useEffect(() => {
    if (!token) {
      navigate("/login")
    }
  }, [token, navigate])

  const fetchCharacter = async (characterId: string) => {
    try {
      const token = localStorage.getItem("jwtToken")
      const response = await axios.get(
        `http://localhost:8080/character/${characterId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      setCharacter(response.data)
      console.log(response.data)
    } catch (error) {
      if (axios.isAxiosError(error) && error.response?.status === 403) {
        alert("Session expired. Please log in again.")
        navigate("/login")
      } else {
        console.error("Error Fetching: ", error)
      }
    }
  }

  useEffect(() => {
    if (id && token) {
      fetchCharacter(id)
    }
  }, [id, token])

  const defaultImage =
    "https://images.desenio.com/zoom/wb0012-8harrypotter-hogwartscrest50x70-60944-71911.jpg"

  return (
    <div
      className="flex justify-center items-center min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {character ? (
        <div className="bg-white bg-opacity-80 p-6 rounded-lg shadow-lg flex max-w-4xl w-full">
          <div className="p-10 flex-shrink-0">
            <img
              src={character.image ? character.image : defaultImage}
              alt={character.name}
              className="w-64 h-74 object-cover rounded"
            />
          </div>

          <div className="ml-40 flex flex-col justify-center space-y-4">
            <h1 className="text-4xl font-bold">{character.name}</h1>
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
            <div>
              <strong>Wand:</strong>
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
            {id && <AddToFavourites characterId={id} />}
          </div>
        </div>
      ) : (
        <p className="text-white text-2xl">Loading character...</p>
      )}
    </div>
  )
}

export default GetOneCharacter
