import React, {useEffect, useState} from "react";
import "./Login.css"
import { Link } from "react-router-dom";
import axios from "axios";

const Login = () => {

    const [username, setUsername] = useState("");
    const [pass, setPass] = useState("");
    const [errorMessage, setErrorMessage] = useState("")

    const serverUrl = "https://frontend-educational-backend.herokuapp.com/api/auth/signin"

    useEffect(() => {
        setErrorMessage("")
    }, [username, pass])

    const loginUser = async (e) => {
        e.preventDefault();
        console.log(username, pass);
        setUsername("");
        setPass("");

    }

    return(
        <div className={"login-page-styling"}>
            <h1>Dit is de login pagina</h1>
            <section className={"login-form-section"}>
                <form onSubmit={loginUser}>
                    <h3>Vul je inloggegevens in</h3>
                    <hr className={"rounded"}/>
                    <label htmlFor="username">Gebruikersnaam:</label>
                    <input
                        placeholder={"Naam"}
                        type="text"
                        id={"username"}
                        autoComplete={"off"}
                        onChange={(e) => setUsername(e.target.value)}
                        value={username}
                        required
                    />
                    <label htmlFor="pass">Wachtwoord:</label>
                    <input
                        placeholder={"******"}
                        type="password"
                        id={"pass"}
                        onChange={(e) => setPass(e.target.value)}
                        value={pass}
                        required
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