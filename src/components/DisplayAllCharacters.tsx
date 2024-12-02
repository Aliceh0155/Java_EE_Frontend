import axios from "axios"
import { useEffect, useState } from "react"
import {CharacterModel} from '../interfaces/CharacterModel'
import { Link } from "react-router-dom"

const DisplayAllCharacters = () => {
  const [characters, setCharacters] = useState<CharacterModel[]>([])

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:8080/allCharacters")
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
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("/src/assets/images/wp8151821-harry-potter-aesthetic-pc-wallpapers.jpg")',
          backgroundAttachment: 'fixed',
          zIndex: -1,
        }}
      />
      <div className="flex flex-wrap justify-center gap-8">
        {characters.map((character) => (
          <div key={character.id} className="w-1/6 p-4 text-center">
            <div className="flex-shrink-0 relative" style={{ height: '240px' }}>
              {/* Lägg till Link runt bilden */}
              <Link to={`/characters/character/${character.id}`}>
                <img
                  src={character.image ? character.image : defaultImage}
                  alt={character.name}
                  className="w-full h-full object-fit rounded"
                />
              </Link>
            </div>
            {/* Lägg till Link runt namnet */}
            <Link to={`/characters/character/${character.id}`}>
              <p className="mt-2 text-sm font-medium text-white">{character.name}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default DisplayAllCharacters
