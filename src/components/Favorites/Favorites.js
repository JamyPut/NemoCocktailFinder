import React from "react";
import "./Favorites.css"
import SingleCocktailComponent from "../SingleCocktailComponent/SingleCocktailComponent";

const drink = localStorage.getItem("strDrink")
const drinkImage = localStorage.getItem("strDrinkThumb")
// const favoriteCocktail = JSON.parse(localStorage.getItem("cocktailArray"))
const cocktailObject = JSON.parse(localStorage.getItem("cocktailObject"))
function Favorites(){
    return(
        <>
            <section>
                <h2>Favorieten</h2>
                <h3>{drink}</h3>
                <img src={drinkImage} alt={drink}/>
            </section>
            <section>
                {Object.keys(cocktailObject).map(({ cocktailId, cocktailImage, cocktailName}) =>{
                    return <SingleCocktailComponent key={cocktailId} id={cocktailId} image={cocktailImage} name={cocktailName} />
                })}
            </section>
        </>
    );
}

export default Favorites