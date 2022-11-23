import React, {useEffect, useState} from "react";
import "./Profile.css"
import axios from "axios";
import SingleCocktailComponent from "../components/SingleCocktailComponent/SingleCocktailComponent";
import Favorites from "../components/Favorites/Favorites";

function Profile() {
    return (
        <div className={"profile-page-styling"}>
            <h1>profiel pagina</h1>
            <div>
                <section>
                    <Favorites/>
                </section>
            </div>
        </div>
    );
}

export default Profile;