import React, {useEffect, useState, useRef} from 'react';
import "./Cocktails.css";
import SingleCocktailComponent from "../components/SingleCocktailComponent/SingleCocktailComponent";
import axios from "axios";

function Cocktails(){

    const [url, setUrl] = useState("")
    const [cocktails, setCocktails] = useState([])
    const inputRef = useRef()

    const alcoholUrl = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=alcoholic'


    const alcoholClick = () => {
        setUrl(alcoholUrl);
        console.log(url)
    };

    const getSearchInput = (event)=>{
        // show the user input value to console
        console.log(inputRef.current.value);
    };

//make setState synchronous
    useEffect(() => {
        console.log('new state', url)
    }, [url])

    const fetchCocktail = () => {
        axios.get(url)
            .then(res => {
                console.log(res.data)
                setCocktails(res.data.drinks)
            })
            .catch(e => console.log(e))
    }


    //        load cocktail upon page load.
    useEffect(()=> {
        fetchCocktail();
    },[url]);

    return(
        <div className={"cocktail-page-styling"}>
            <section className={"filter-buttons"}>
                <button onClick={alcoholClick}>met alcohol</button>
                <input type="text" ref={inputRef} onChange={getSearchInput}/>
            </section>
            <section className='section'>
                <h1 className='section-title'>Cocktails</h1>
                <div className='cocktail-list'>
                    {cocktails.map(({ strDrink, strDrinkThumb, idDrink}) => {
                        return <SingleCocktailComponent id={idDrink} image={strDrinkThumb} name={strDrink}  />;
                    })}
                </div>
            </section>
        </div>

    )
}

export default Cocktails;