import React from "react";
import "./Favorites.css"
import SingleCocktailComponent from "../SingleCocktailComponent/SingleCocktailComponent";

const drink = localStorage.getItem("strDrink")
const drinkImage = localStorage.getItem("strDrinkThumb")
// const favoriteCocktail = JSON.parse(localStorage.getItem("cocktailArray"))
const cocktailObject = JSON.parse(localStorage.getItem("cocktailObject"))
const arrayOfCocktailObjects = JSON.parse(localStorage.getItem("arrayOfCocktailObjects"))
console.log(arrayOfCocktailObjects)
const cocktailArray = arrayOfCocktailObjects.drinks[0]
function Favorites(){
    return(
        <>
            <section>
                <h2>Favorieten</h2>
                <h3>{drink}</h3>
                <img src={drinkImage} alt={drink}/>
            </section>
            <section>
                <SingleCocktailComponent key={cocktailArray.idDrink} id={cocktailArray.idDrink} image={cocktailArray.strDrinkThumb} name={cocktailArray.strDrink} />
            </section>
        </>
    );
}

export default Favorites