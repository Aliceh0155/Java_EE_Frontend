import axios from "axios"
import React, { useEffect, useState } from "react"

// Wand interface
interface Wand {
  wood: string
  core: string
  length: number
}

// CharacterModel interface
interface CharacterModel {
  id: string
  name: string
  species: string
  gender: string
  house: string
  dateOfBirth: string
  yearOfBirth: number
  wizard: boolean
  ancestry: string
  eyeColour: string
  hairColour: string
  wand: Wand
  hogwartsStudent: boolean
  alive: boolean
  image: string
}

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
    <div>
    <h1>All Characters</h1>
    <div className="flex flex-wrap justify-center gap-8">
      {characters.map((character) => (
        <div key={character.id} className="w-1/6 p-4 text-center">
          <div className="flex-shrink-0 relative" style={{ height: '240px' }}>
            <img
              src={character.image ? character.image : defaultImage}
              alt={character.name}
              className="w-full h-full object-fit rounded"
            />
          </div>
          <p className="mt-2 text-sm font-medium">{character.name}</p>
        </div>
      ))}
    </div>
  </div>
  )
}

export default DisplayAllCharacters
