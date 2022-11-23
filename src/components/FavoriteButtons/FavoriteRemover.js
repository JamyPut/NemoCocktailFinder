import React from "react";
import "./FavoriteButtons.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faRemove} from "@fortawesome/free-solid-svg-icons";

const FavoriteRemover = ({id, name, image}) => {

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

    return (
        <button onClick={handleRemoveFavorite} className={"favorite-button"}>
            Verwijderen uit favorieten!
            <FontAwesomeIcon icon={faRemove}/>
        </button>
    )
};
export default FavoriteRemover;