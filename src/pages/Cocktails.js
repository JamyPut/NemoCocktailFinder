import React, {useEffect, useState, useRef} from 'react';
import "./Cocktails.css";
import SingleCocktailComponent from "../components/SingleCocktailComponent/SingleCocktailComponent";
import axios from "axios";

function Cocktails(){

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

    // const getSearchInput = () => {
    //     const searchUrl = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${inputRef}`
    //
    //     setUrl(searchUrl);
    //     console.log(url)
    //     console.log(searchUrl)
    // };
    const getSearchInput = (event)=>{
        event.preventDefault();
        const searchUrl = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${inputRef}`
        setUrl(searchUrl);
        // show the user input value to console
        console.log(url);
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

    // const searchCocktail = () => {
    //     axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${inputRef}`)
    //         .then(res => {
    //             console.log(res.data)
    //             setCocktails(res.data.drinks)
    //         })
    //         .catch(e => console.log(e))
    // }


    //        load cocktail upon page load.
    useEffect(()=> {
        fetchCocktail();
    },[url]);

    // if (cocktails.length < 1){
    //     return (
    //         <div className={"cocktail-page-styling"}>
    //             <div className={"no-results-styling"}>
    //                 <h1 className='section-title'>
    //                 Vind jou cocktails!
    //                 probeer een van de filter knoppen of vul een nieuw zoekresultaat in.
    //             </h1>
    //                 <section className={"cocktail-filters"}>
    //                     <button onClick={alcoholClick}>met alcohol</button>
    //                     <button onClick={nonAlcoholClick}>zonder alcohol</button>
    //                     <input type="text" ref={inputRef} onChange={getSearchInput}/>
    //                 </section>
    //             </div>
    //         </div>
    //     )
    // }
    return(
        <div className={"cocktail-page-styling"}>
            <section className={"cocktail-filters"}>
                <button onClick={alcoholClick}>met alcohol</button>
                <button onClick={nonAlcoholClick}>zonder alcohol</button>
                <form onSubmit={getSearchInput}>
                    <input type="text" ref={inputRef}/>
                    <button type={"submit"}> zoek</button>
                </form>
            </section>
            <section className='section'>
                <h1 className='section-title'>Cocktails</h1>
                <div className='cocktail-list'>
                    {cocktails.map(({ strDrink, strDrinkThumb, idDrink}) => {
                        return <SingleCocktailComponent key={idDrink} id={idDrink} image={strDrinkThumb} name={strDrink}  />;
                    })}
                </div>
            </section>
        </div>

    )
}

export default Cocktails;