import React, {useEffect, useState} from "react";
import "./Favorites.css"
import SingleCocktailComponent from "../SingleCocktailComponent/SingleCocktailComponent";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faRefresh} from "@fortawesome/free-solid-svg-icons";

function Favorites(){

    const [favorites, setFavorites] = useState([])
    const favoritefetch = () => {
        const data = JSON.parse(localStorage.getItem("favoriteCocktails"));
        setFavorites(data)
    }

    return(
        <>
            <section className={"favorite-title"}>
                <h2>Favorieten</h2>
                <button className={"refresh-favorites"} onClick={favoritefetch}>
                    <FontAwesomeIcon icon={faRefresh} />
                </button>
            </section>
            <section>
                <div className={"favorite-cocktail"}>
                    {favorites && favorites.map(({strDrink, strDrinkThumb, idDrink}) => {
                    return <SingleCocktailComponent key={idDrink} id={idDrink} image={strDrinkThumb} name={strDrink}/>;
                })}
                </div>
            </section>
        </>
    );
}

export default Favorites