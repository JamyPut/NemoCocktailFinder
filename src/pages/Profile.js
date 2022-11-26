import React from "react";
import "./Profile.css"
import Favorites from "../components/Favorites/Favorites";
import useAuth from "../helpers/useAuth";

function Profile() {
    const authInfo = useAuth()
    console.log(useAuth())
    console.log(authInfo)
    console.log(authInfo.auth.username)
    return (
        <div className={"profile-page-styling"}>
            <h1>profiel pagina</h1>
            <div className={"profile-container"}>
                <section className={"favorite-component"}>
                    <Favorites/>
                </section>
                <section className={"profile-component"}>
                    <h2>Gebruiker:</h2>
                    <h3>Je bent ingelogd als: {authInfo.auth.username}</h3>
                </section>
            </div>
        </div>
    );
}

export default Profile;