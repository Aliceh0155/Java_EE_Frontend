import { useState } from "react"
import axios from "axios"

interface AddToFavouritesProps {
  characterId: string
}

const AddToFavourites = ({ characterId }: AddToFavouritesProps) => {
  const [isFavorite, setIsFavorite] = useState(false)

  const handleAddToFavorites = async () => {
    try {
      const response = await axios.post(
        `http://localhost:8080/addFavoriteCharacterToDatabase/${characterId}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
          },
        }
      )

      if (response.status === 200) {
        setIsFavorite(true)
        alert("Character added to favorites!")
      } else {
        alert("Failed to add character to favorites.")
      }
    } catch (error) {
      console.error("Error adding to favorites:", error)
      alert("Something went wrong. Please try again.")
    }
  }

  return (
    <button onClick={handleAddToFavorites} disabled={isFavorite}>
      {isFavorite ? "Added to Favorites" : "Add to Favorites"}
    </button>
  )
}

export default AddToFavourites
