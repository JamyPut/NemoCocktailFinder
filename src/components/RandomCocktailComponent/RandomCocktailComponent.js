import React, {useCallback, useEffect, useState} from "react";
import "./RandomCocktailComponent.css"
import axios from "axios";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faRotate, faCocktail} from "@fortawesome/free-solid-svg-icons";


const randomCocktailUrl = "https://www.thecocktaildb.com/api/json/v1/1/random.php";

function RandomCocktailComponent(){

    // const [data,setData] = useState([]);
    //
    // const randomCocktailUrl = "https://www.thecocktaildb.com/api/json/v1/1/random.php";
    //
    // const fetchCocktailHandler = useCallback(()=> {
    //     axios
    //         .get(randomCocktailUrl)
    //         .then(res=> {
    //             console.log(res.data)
    //             setData(res.data.drinks);
    //         }).catch(e=>console.log(e))
    // },[]);
    //
    // useEffect(()=> {
    //     fetchCocktailHandler();
    // },[fetchCocktailHandler]);

    const [randomCocktail, setRandomCocktail] = useState({});

    async function fetchRandomCocktail(){
        try {
            const result = await axios.get(randomCocktailUrl);
            console.log(result.data);
            setRandomCocktail(result.data);
                } catch(e) {
                    console.error(e);
                }
    }

    return(
        <section>
            <div className={"randomize-button-container"}>
                <button onClick={fetchRandomCocktail} className={"randomize-icon"}>
                    <FontAwesomeIcon icon={faRotate}></FontAwesomeIcon>
                </button>
                <button onClick={fetchRandomCocktail} className={"randomize-text"}>verras me</button>
            </div>
            <article>
                {Object.keys(randomCocktail).length > 0 &&
                <p>{randomCocktail.drinks.strDrink}</p>}
            </article>
        </section>
    )
}

export default RandomCocktailComponent;