import React, {useEffect, useState} from "react";
import "./Login.css"
import { Link } from "react-router-dom";
import axios from "axios";
import useAuth from "../helpers/useAuth";

const Login = () => {

    const {setAuth} = useAuth();
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("");
    const [errorMessage, setErrorMessage] = useState("")

    const serverUrl = "https://frontend-educational-backend.herokuapp.com/api/auth/signin"

    useEffect(() => {
        setErrorMessage("")
    }, [username, pass])

    const loginUser = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(serverUrl, JSON.stringify({username, password: pass}),
                {
                    headers: {"Content-Type": "application/json" },
                }
                );
            console.log(response.data)
            const accesToken = response?.data?.accesToken;
            const roles = response?.data?.roles;
            setEmail(response.data.email)
            setAuth({username, pass, roles, accesToken});
            console.log(username, pass);
            setUsername("");
            setPass("");
        } catch (error){
            if (!error?.response){
                setErrorMessage("No response from server");
            } else {
                console.log(error.response)
                setErrorMessage(error.response.status)
            }
        }
    }

    return(
        <div className={"login-page-styling"}>
            <h1>Dit is de login pagina</h1>
            <section className={"login-form-section"}>
                <p>Ingelod met {email}</p>
                <p>Foutcode == {errorMessage}</p>
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