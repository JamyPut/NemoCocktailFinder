import React, {useState, useCallback, useEffect} from 'react';
import "./Home.css"
import {NavLink} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRotate } from '@fortawesome/free-solid-svg-icons'
import axios from "axios";

function Home() {

    const [loading,setLoading] = useState(false);
    const [data,setData] = useState([]);

    const randomCocktailUrl = "https://www.thecocktaildb.com/api/json/v1/1/random.php";

    const fetchCocktailHandler = useCallback(()=> {
        setLoading(true);

        axios
            .get(randomCocktailUrl)
            .then(res=> {
            console.log(res.data)
            setData(res.data.drinks);
        }).catch(e=>console.log(e))
            .finally(()=>setLoading(false))
    },[]);

    useEffect(()=> {
        fetchCocktailHandler();
    },[fetchCocktailHandler]);


    return(
        <>
            <div className={"intro-container"}>
                <h1 className={"nemo-title"}>
                    Welkom bij Nemo.
                    <p>Wij helpen je navigeren in een zee vol cocktails!</p>
                </h1>
                <button className={"cocktail-button"}>
                    <NavLink to={"/cocktails"}>Alle cocktails</NavLink>
                </button>
            </div>
            <div className={"randomize-container"}>
                <button className={"randomize-icon"}>
                    <FontAwesomeIcon icon={faRotate}></FontAwesomeIcon>
                </button>
                <button className={"randomize-text"}>verras me</button>
            </div>
            <div>
                {data.map((cocktail)=> (
                    <article className={"random-cocktail-item"} key={cocktail.idDrink}>
                        <h2>{cocktail.strDrink}</h2>
                        <img src={cocktail.strDrinkThumb} alt=""/>
                    </article>
                ))}
            </div>
        </>
    );
}

export default Home;