import React from "react";
import { Link } from "react-router-dom";
import "./SingleCocktailComponent.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleInfo} from "@fortawesome/free-solid-svg-icons";
import FavoriteAdder from "../FavoriteButtons/FavoriteAdder";
import FavoriteRemover from "../FavoriteButtons/FavoriteRemover";

const SingleCocktailComponent = ({ id, name, image }) => {

    return (
        <section className="single-cocktail">
                <img src={image} alt={name} />
                <Link to={`/${id}`} className="single-cocktail-button">
                    <p>{name}</p>
                    <FontAwesomeIcon icon={faCircleInfo} />
                </Link>
                <FavoriteAdder id={id} name={name} image={image} />
                <FavoriteRemover id={id} name={name} image={image} />
        </section>
    );
};


export default SingleCocktailComponent;