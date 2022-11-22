import React from "react";
import { Link } from "react-router-dom";
import "./SingleCocktailComponent.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleInfo, faStar, faRemove} from "@fortawesome/free-solid-svg-icons";

const SingleCocktailComponent = ({ id, name, image }) => {

    const cocktailObject = {
        strDrink: name,
        strDrinkThumb: image,
        idDrink: id
    }

    const favoriteAdder = () => {
        let currentFavorites = JSON.parse(localStorage.getItem("favoriteCocktails")) || [];
        currentFavorites = currentFavorites.filter((cocktailItem) => cocktailItem.idDrink !== cocktailObject.idDrink)
        currentFavorites.unshift(cocktailObject)
        // currentFavorites.push(cocktailObject);
        console.log(currentFavorites)
        localStorage.setItem("favoriteCocktails", JSON.stringify(currentFavorites));
    }
    const favoriteRemover = () => {
        let currentFavorites = JSON.parse(localStorage.getItem("favoriteCocktails")) || [];
        currentFavorites = currentFavorites.filter((cocktailItem) => cocktailItem.idDrink !== cocktailObject.idDrink)
        console.log(currentFavorites)
        // currentFavorites.splice(cocktailIndex, 1);
        localStorage.setItem("favoriteCocktails", JSON.stringify(currentFavorites));
    }

    return (
        <section className="single-cocktail">
                <img src={image} alt={name} />
                <Link to={`/${id}`} className="single-cocktail-button">
                    <p>{name}</p>
                    <FontAwesomeIcon icon={faCircleInfo} />
                </Link>
                <button onClick={favoriteAdder}>
                    Toevoegen aan favorieten
                    <FontAwesomeIcon icon={faStar} />
                </button>
                <button onClick={favoriteRemover}>
                    Verwijderen uit favorieten
                    <FontAwesomeIcon icon={faRemove} />
                </button>
        </section>
    );
};


export default SingleCocktailComponent;