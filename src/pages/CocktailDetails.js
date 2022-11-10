import React, {useEffect, useState} from "react";
import "./CocktailDetails.css"
import {Link, useParams} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar, faFileLines, faListCheck} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import SingleCocktailComponent from "../components/SingleCocktailComponent/SingleCocktailComponent";

function CocktailDetails() {

    const {cocktailid} = useParams()
    const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i="
    const [cocktail, setCocktail] = useState()

    const fetchCocktail = () => {
        axios.get(url + cocktailid)
            .then(res => {
                console.log(res.data)
                setCocktail(res.data.drinks)
                console.log(cocktail)
            })
            .catch(e => console.log(e))
    }
    useEffect(() => {
        fetchCocktail();
    }, [cocktailid]);


    return (
        <div className={"cocktail-details-page-styling"}>
            {cocktail && cocktail.map(({
                                           idDrink,
                                           strDrink,
                                           strDrinkThumb,
                                           strInstructions,
                                           strIngredient1,
                                           strIngredient2,
                                           strIngredient3,
                                           strIngredient4,
                                           strIngredient5,
                                           strIngredient6,
                                           strIngredient7,
                                           strIngredient8,
                                           strIngredient9,
                                           strIngredient10,
                                           strIngredient11,
                                           strIngredient12,
                                           strIngredient13,
                                           strIngredient14,
                                           strIngredient15,
                                           strMeasure1,
                                           strMeasure2,
                                           strMeasure3,
                                           strMeasure4,
                                           strMeasure5,
                                           strMeasure6,
                                           strMeasure7,
                                           strMeasure8,
                                           strMeasure9,
                                           strMeasure10,
                                           strMeasure11,
                                           strMeasure12,
                                           strMeasure13,
                                           strMeasure14,
                                           strMeasure15,
                                       }) => {
                return (
                    <div key={idDrink}>
                        <h1>Cocktail detail pagina</h1>
                        <div className={"cocktail"}>
                            <section>
                                <div className={"cocktail-image-text"}>
                                    <h3>{strDrink}</h3>
                                    <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                                </div>
                                <img src={strDrinkThumb} alt={strDrink + " image"}/>
                            </section>
                            <section className="cocktail-description">
                                <h3>
                                    Benodigdheden
                                    <FontAwesomeIcon icon={faListCheck}></FontAwesomeIcon>
                                </h3>
                                <ul>
                                    <li>{strIngredient1} {strMeasure1}</li>
                                    <li>{strIngredient2} {strMeasure2}</li>
                                    <li>{strIngredient3} {strMeasure3}</li>
                                    <li>{strIngredient4} {strMeasure4}</li>
                                    <li>{strIngredient5} {strMeasure5}</li>
                                    <li>{strIngredient6} {strMeasure6}</li>
                                    <li>{strIngredient7} {strMeasure7}</li>
                                    <li>{strIngredient8} {strMeasure8}</li>
                                    <li>{strIngredient9} {strMeasure9}</li>
                                    <li>{strIngredient10} {strMeasure10}</li>
                                    <li>{strIngredient11} {strMeasure11}</li>
                                    <li>{strIngredient12} {strMeasure12}</li>
                                    <li>{strIngredient13} {strMeasure13}</li>
                                    <li>{strIngredient14} {strMeasure14}</li>
                                    <li>{strIngredient15} {strMeasure15}</li>
                                </ul>
                                <h3>
                                    Beschrijving
                                    <FontAwesomeIcon icon={faFileLines}></FontAwesomeIcon>
                                </h3>
                                <p>{strInstructions}</p>
                            </section>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default CocktailDetails
