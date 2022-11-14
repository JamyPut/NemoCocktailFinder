import React from "react";
import { Link } from "react-router-dom";
import "./SingleCocktailComponent.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleInfo, faStar} from "@fortawesome/free-solid-svg-icons";

const SingleCocktailComponent = ({ id, name, image }) => {

    const cocktailObject = {
        cocktailId:id,
        cocktailName:name,
        cocktailImage:image
    }
    const favoriteHandler = () => {
        console.log("Button is clicked")
        localStorage.setItem("cocktailObject", JSON.stringify(cocktailObject));
        // localStorage.setItem("idDrink", id)
        // localStorage.setItem("strDrink", name)
        // localStorage.setItem("strDrinkThumb", image)
        console.log(localStorage.getItem("cocktailArray"))
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