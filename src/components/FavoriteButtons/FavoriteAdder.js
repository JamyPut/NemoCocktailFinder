import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar, faRemove} from "@fortawesome/free-solid-svg-icons";

const FavoriteAdder = ({ id, name, image }) => {

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

    return(
        <button onClick={handleFavorite}>
            Toevoegen aan favorieten! component
            <FontAwesomeIcon icon={faStar} />
        </button>
    )
};
export default FavoriteAdder;