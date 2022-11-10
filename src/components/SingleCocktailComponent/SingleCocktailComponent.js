import React from "react";
import { Link } from "react-router-dom";
import "./SingleCocktailComponent.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleInfo} from "@fortawesome/free-solid-svg-icons";

const SingleCocktailComponent = ({ id, name, image }) => {
    return (
        <section className="single-cocktail">
                <img src={image} alt={name} />
                <Link to={`/${id}`} className="single-cocktail-button">
                    <p>{name}</p>
                    <FontAwesomeIcon icon={faCircleInfo}></FontAwesomeIcon>
                </Link>
        </section>
    );
};


export default SingleCocktailComponent;