import React, {useEffect, useState} from "react";
import {NavLink} from "react-router-dom";
import "./RandomCocktailComponent.css"
import axios from "axios";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCocktail, faRotate} from "@fortawesome/free-solid-svg-icons";
import FavoriteAdder from "../FavoriteButtons/FavoriteAdder";
import FavoriteRemover from "../FavoriteButtons/FavoriteRemover";


const randomCocktailUrl = "https://www.thecocktaildb.com/api/json/v1/1/random.php";

function RandomCocktailComponent() {

    const [cocktail, setCocktail] = useState([])
    const fetchCocktail = () => {
        axios.get(randomCocktailUrl)
            .then(res => {
                console.log(res.data)
                setCocktail(res.data.drinks[0])
            })
            .catch(e => console.log(e))
    }


    //        load cocktail upon page load.
    useEffect(() => {
        fetchCocktail();
    }, []);


    return (
        <section>
            <div className={"random-cocktail-section"}>
                <button onClick={fetchCocktail} className={"randomize-button"}>
                    <FontAwesomeIcon icon={faRotate}/>
                    verras me!
                </button>
                <img src={cocktail && cocktail.strDrinkThumb} alt="cocktail-image"/>
                <button className={"random-cocktail-button"}>
                    <NavLink to={`/${cocktail.idDrink}`}>
                        <FontAwesomeIcon icon={faCocktail}/>
                        {cocktail && cocktail.strDrink}
                    </NavLink>
                </button>
                <FavoriteAdder id={cocktail.idDrink} name={cocktail.strDrink} image={cocktail.strDrinkThumb}/>
                <FavoriteRemover id={cocktail.idDrink} name={cocktail.strDrink} image={cocktail.strDrinkThumb}/>
            </div>
        </section>
    )
}

export default RandomCocktailComponent;