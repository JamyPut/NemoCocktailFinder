import React from "react";
import "./Favorites.css"
import SingleCocktailComponent from "../SingleCocktailComponent/SingleCocktailComponent";


const favoritefetch = JSON.parse(localStorage.getItem("favoriteCocktails"));

console.log(favoritefetch)
function Favorites(){
    return(
        <>
            <section>
                <h2>Favorieten</h2>
            </section>
            <section>
                <button onClick={() => window.location.reload()}>Favorieten ophalen!</button>
                <div>
                    {favoritefetch && favoritefetch.map(({strDrink, strDrinkThumb, idDrink}) => {
                    return <SingleCocktailComponent key={idDrink} id={idDrink} image={strDrinkThumb} name={strDrink}/>;
                })}
                </div>
            </section>
        </>
    );
}

export default Favorites