import React from "react";
import { Link } from "react-router-dom";
import "./SingleCocktailComponent.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleInfo, faStar} from "@fortawesome/free-solid-svg-icons";

const SingleCocktailComponent = ({ id, name, image }) => {

    const cocktailArray = [
        {
            strDrink:name,
            strDrinkThumb:image,
            idDrink:id
        }
    ]
    const favoriteHandler = () => {
        const currentFavorites = JSON.parse(localStorage.getItem("favoriteCocktails"))
        if (!currentFavorites.includes(cocktailArray)){
            currentFavorites.push(cocktailArray)
        }
        localStorage.setItem("favoriteCocktails", JSON.stringify(currentFavorites));
        console.log(currentFavorites)
        // localStorage.setItem("favoriteCocktails", JSON.stringify(cocktailArray))
    }

    return (
        <section className="single-cocktail">
                <img src={image} alt={name} />
                <Link to={`/${id}`} className="single-cocktail-button">
                    <p>{name}</p>
                    <FontAwesomeIcon icon={faCircleInfo} />
                </Link>
                <button onClick={favoriteHandler}>
                    Toevoegen aan favorieten
                    <FontAwesomeIcon icon={faStar} />
                </button>
        </section>
    );
};


export default SingleCocktailComponent;