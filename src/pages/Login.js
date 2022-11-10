import React, {useState} from "react";
import "./Login.css"
import { Link } from "react-router-dom";
import axios from "axios";

function Login(){

    const [fetchedTest, setFetchedTest] = useState()
    const [url, seturl] = useState()
    const serverUrl = "https://frontend-educational-backend.herokuapp.com/api/test/all"

    const testServer = () => {
        axios.get(serverUrl)
            .then(res => {
                console.log(res.data)
                setFetchedTest(res.data)
                console.log(fetchedTest)
            })
            .catch(e => console.log(e));
    }
    return(
        <div className={"login-page-styling"}>
            <h1>Dit is de login pagina</h1>
            <button onClick={testServer}>klik hier</button>
            <p>api informatie: {fetchedTest}</p>
            <section className={"login-form-section"}>
                <form>
                    <h3>Vul je inloggegevens in</h3>
                    <hr className={"rounded"}/>
                    <label htmlFor="username">Gebruikersnaam:</label>
                    <input
                        placeholder={"Naam"}
                        type="text"
                        id={"username"}
                        autoComplete={"off"}
                    />
                    <label htmlFor="password">Wachtwoord:</label>
                    <input
                        placeholder={"********"}
                        type="password"
                        id={"password"}
                    />
                    <button>Inloggen</button>
                </form>
                <hr className={"rounded"}/>
                <Link to={"/register"}>Nog geen account? klik hier om je te registreren</Link>
            </section>
        </div>
    );
}
export default Login