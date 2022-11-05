import React from "react";
import { Link } from "react-router-dom";

const SingleCocktailComponent = ({ id, name, image, info, glass }) => {
    return (
        <article className="single-cocktail">
            <div className="single-cocktail-image">
                <img src={image} alt={name} />
            </div>
            <div className="singe-cocktail-subtext">
                <h3>{name}</h3>
                <h4>{glass}</h4>
                <p>{info}</p>
                <Link to={`/${id}`} className="single-cocktail-button">
                    Lees meer
                </Link>
            </div>
        </article>
    );
};


export default SingleCocktailComponent;