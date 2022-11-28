import React, {useEffect, useRef, useState} from 'react';
import "./Cocktails.css";
import SingleCocktailComponent from "../components/SingleCocktailComponent/SingleCocktailComponent";
import axios from "axios";

function Cocktails() {

    const [url, setUrl] = useState("")
    const [cocktails, setCocktails] = useState([])
    const inputRef = useRef()

    const alcoholUrl = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=alcoholic'
    const nonAlcoholUrl = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic'

    const alcoholClick = () => {
        setUrl(alcoholUrl);
        console.log(url)
    };
    const nonAlcoholClick = () => {
        setUrl(nonAlcoholUrl);
        console.log(url)
    };

    const getSearchInput = (event) => {
        event.preventDefault();
        console.log(inputRef)
        const searchUrl = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${inputRef.current.value}`
        setUrl(searchUrl);
        console.log(url);
    };

//make setState synchronous
    useEffect(() => {
        console.log('new state', url)
    }, [url])


    const fetchCocktail = () => {
        axios.get(url)
            .then(res => {
                // console.log(res.data)
                setCocktails(res.data.drinks)
            })
            .catch(e => console.log(e))
    }


    //        load cocktail upon page load.
    useEffect(() => {
        fetchCocktail();
    }, [url]);


    if (cocktails && cocktails?.length < 1) {
        return (
            <div className={"cocktail-page-styling"}>
                <div className={"no-results-styling"}>
                    <h1 className='section-title'>
                        Vind jouw cocktails!
                        Probeer een van de filter knoppen of vul een nieuw zoekresultaat in.
                    </h1>
                    <section className={"cocktail-filters"}>
                        <button onClick={alcoholClick}>Met alcohol</button>
                        <button onClick={nonAlcoholClick}>Zonder alcohol</button>
                        <form className={"search-form"} onSubmit={getSearchInput}>
                            <input placeholder={"bijv: pina colada"} type="text" ref={inputRef}/>
                            <button id={"submit-button"} type={"submit"}>Zoek</button>
                        </form>
                    </section>
                </div>
            </div>
        )
    }
    return (
        <div className={"cocktail-page-styling"}>
            <section className={"cocktail-filters"}>
                <button onClick={alcoholClick}>Met alcohol</button>
                <button onClick={nonAlcoholClick}>Zonder alcohol</button>
                <form className={"search-form"} onSubmit={getSearchInput}>
                    <input placeholder={"bijv: pina colada"} type="text" ref={inputRef}/>
                    <button id={"submit-button"} type={"submit"}>Zoek</button>
                </form>
            </section>
            <section className='section'>
                <h1 className='section-title'>Cocktails</h1>
                <div className='cocktail-list'>
                    {cocktails && cocktails.map(({strDrink, strDrinkThumb, idDrink}) => {
                        return <SingleCocktailComponent key={idDrink} id={idDrink} image={strDrinkThumb}
                                                        name={strDrink}/>;
                    })}
                </div>
            </section>
        </div>

    )
}

export default Cocktails;