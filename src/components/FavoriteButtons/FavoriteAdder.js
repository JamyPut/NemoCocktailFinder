import React from "react";
import "./FavoriteButtons.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar} from "@fortawesome/free-solid-svg-icons";

const FavoriteAdder = ({id, name, image}) => {

    const cocktailObject = {
        strDrink: name,
        strDrinkThumb: image,
        idDrink: id
    }
    const handleFavorite = () => {
        let currentFavorites = JSON.parse(localStorage.getItem("favoriteCocktails")) || [];
        currentFavorites = currentFavorites.filter((cocktailItem) => cocktailItem.idDrink !== cocktailObject.idDrink)
        currentFavorites.push(cocktailObject)
        console.log(currentFavorites)
        localStorage.setItem("favoriteCocktails", JSON.stringify(currentFavorites));
    }

    return (
        <button onClick={handleFavorite} className={"favorite-button"}>
            Toevoegen aan favorieten!
            <FontAwesomeIcon icon={faStar}/>
        </button>
    )
};
export default FavoriteAdder;