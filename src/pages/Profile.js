import React, {useEffect, useState} from "react";
import "./Profile.css"
import axios from "axios";
import SingleCocktailComponent from "../components/SingleCocktailComponent/SingleCocktailComponent";

function Profile(){

    const [cocktails, setCocktails] = useState([])
    const [url, setUrl] = useState()
    const baseUrl = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=14588"


    const fetchCocktail = () => {
        axios.get(url)
            .then(res => {
                console.log(res.data)
                setCocktails(res.data.drinks)
            })
            .catch(e => console.log(e))
    }

    useEffect(() => {
        fetchCocktail()
    }, [url])


    return(
        <div className={"profile-page-styling"}>
            <h1>profiel pagina</h1>
            <div>
                <section>
                    {cocktails?.map(({ strDrink, strDrinkThumb, idDrink}) => {
                        return <SingleCocktailComponent key={idDrink} id={idDrink} image={strDrinkThumb} name={strDrink}  />;
                    })}
                </section>
                <section>

                </section>
            </div>
        </div>
    );
}
export default Profile;