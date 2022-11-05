import React, {useState} from 'react';
import "./Cocktails.css";
import SingleCocktailComponent from "../components/SingleCocktailComponent/SingleCocktailComponent";

function Cocktails(){

    const [cocktails, setCocktails] = useState([])
    return(

        <section className='section'>
            <h2 className='section-title'>Cocktails</h2>
            <div className='cocktails-center'>
                {cocktails.map((item) => {
                    return <SingleCocktailComponent key={item.id} {...item} />;
                })}
            </div>
        </section>
    )
}

export default Cocktails;