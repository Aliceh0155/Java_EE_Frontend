import React, { useEffect, useState } from "react"
import axios from "axios"
import { CharacterModel } from "../interfaces/CharacterModel"
import { Link } from "react-router-dom"

const GetFavourites = () => {
  const [favouriteCharacters, setFavouriteCharacters] = useState<
    CharacterModel[]
  >([])
  const defaultImage =
    "https://images.desenio.com/zoom/wb0012-8harrypotter-hogwartscrest50x70-60944-71911.jpg"

  useEffect(() => {
    const fetchFavoritesAndCharacters = async () => {
      try {
        const token = localStorage.getItem("jwtToken")

        // Hämta alla karaktärer från databasen
        const allCharactersResponse = await axios.get(
          "http://localhost:8080/getAllCharactersFromDatabase",
          {
            headers: {
              Authorization: `Bearer ${token}`, // Om alla karaktärer också kräver auth
            },
          }
        )
        const allCharacters: CharacterModel[] = allCharactersResponse.data

        // Hämta favorit-ID:n från inloggad användare
        const favouriteIdsResponse = await axios.get(
          "http://localhost:8080/getFavouriteCharacters",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        const favouriteIds: string[] = favouriteIdsResponse.data // Lista av favorit-ID:n

        // Filtrera ut karaktärer som matchar favorit-ID:n
        const filteredFavorites = allCharacters.filter((character) =>
          favouriteIds.includes(character.apiId)
        )

        setFavouriteCharacters(filteredFavorites)
      } catch (error) {
        console.error("Error fetching data:", error)
      }
    }

    fetchFavoritesAndCharacters()
  }, [])

  return (
    <div>
      <div className="flex justify-center pt-8">
        <div className="bg-gray-900 bg-opacity-90 rounded-lg p-6 shadow-lg w-11/12 max-w-6xl">
          <h2 className="text-white text-3xl font-bold text-center mb-6">
            Your Favorites
          </h2>
          <div className="flex flex-wrap justify-center gap-8">
            {favouriteCharacters.map((character) => (
              <div key={character.apiId} className="w-1/6 p-4 text-center">
                <div
                  className="flex-shrink-0 relative"
                  style={{ height: "240px" }}
                >
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
      </div>
    </div>
  )
}

export default GetFavourites
