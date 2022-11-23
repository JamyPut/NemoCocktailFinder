import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar, faRemove} from "@fortawesome/free-solid-svg-icons";

const FavoriteRemover = ({ id, name, image }) => {

    const cocktailObject = {
        strDrink: name,
        strDrinkThumb: image,
        idDrink: id
    }
    const handleRemoveFavorite = () => {
        let currentFavorites = JSON.parse(localStorage.getItem("favoriteCocktails")) || [];
        currentFavorites = currentFavorites.filter((cocktailItem) => cocktailItem.idDrink !== cocktailObject.idDrink)
        console.log(currentFavorites)
        localStorage.setItem("favoriteCocktails", JSON.stringify(currentFavorites));
    }

    return(
        <button onClick={handleRemoveFavorite}>
            Verwijderen uit favorieten! component
            <FontAwesomeIcon icon={faRemove} />
        </button>
    )
};
export default FavoriteRemover;