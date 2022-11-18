import React from "react";
import "./Favorites.css"
import SingleCocktailComponent from "../SingleCocktailComponent/SingleCocktailComponent";


const favoritefetch = JSON.parse(localStorage.getItem("favoriteCocktails"));
const favoriteCocktails = favoritefetch.slice(1)

console.log(favoriteCocktails)
function Favorites(){
    return(
        <>
            <section>
                <h2>Favorieten</h2>
            </section>
            <section>
                {favoriteCocktails && favoriteCocktails.map(({ strDrink, strDrinkThumb, idDrink}) => {
                    return <SingleCocktailComponent key={idDrink} id={idDrink} image={strDrinkThumb} name={strDrink}  />;
                })}
            </section>
        </>
    );
}

export default Favorites