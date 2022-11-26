import React from "react";
import "./Favorites.css"
import SingleCocktailComponent from "../SingleCocktailComponent/SingleCocktailComponent";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faRefresh} from "@fortawesome/free-solid-svg-icons";


const favoritefetch = JSON.parse(localStorage.getItem("favoriteCocktails"));

console.log(favoritefetch)
function Favorites(){
    return(
        <>
            <section className={"favorite-title"}>
                <h2>Favorieten</h2>
                <button className={"refresh-favorites"} onClick={() => window.location.reload()}>
                    <FontAwesomeIcon icon={faRefresh} />
                </button>
            </section>
            <section>
                <div className={"favorite-cocktail"}>
                    {favoritefetch && favoritefetch.map(({strDrink, strDrinkThumb, idDrink}) => {
                    return <SingleCocktailComponent key={idDrink} id={idDrink} image={strDrinkThumb} name={strDrink}/>;
                })}
                </div>
            </section>
        </>
    );
}

export default Favorites