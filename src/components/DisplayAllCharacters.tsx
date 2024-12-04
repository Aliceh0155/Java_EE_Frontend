import axios from "axios"
import { useEffect, useState } from "react"
import { CharacterModel } from "../interfaces/CharacterModel"
import { Link } from "react-router-dom"

const DisplayAllCharacters = () => {
  const [characters, setCharacters] = useState<CharacterModel[]>([])

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8080/getAllCharactersFromDatabase"
      )
      console.log(response.data)
      setCharacters(response.data)
    } catch (error) {
      console.error("Error Fetching: ", error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  const defaultImage =
    "https://images.desenio.com/zoom/wb0012-8harrypotter-hogwartscrest50x70-60944-71911.jpg"

  return (
    <div className="relative">
      <div className="flex flex-wrap justify-center gap-8">
        {characters.map((character) => (
          <div key={character.apiId} className="w-1/6 p-4 text-center">
            <div className="flex-shrink-0 relative" style={{ height: "240px" }}>
              <Link to={`/characters/character/${character.apiId}`}>
                <img
                  src={character.image ? character.image : defaultImage}
                  alt={character.name}
                  className="w-full h-full object-cover rounded"
                />
              </Link>
            </div>

            <Link to={`/characters/character/${character.apiId}`}>
              <p className="mt-2 text-sm font-medium text-white">
                {character.name}
              </p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default DisplayAllCharacters
