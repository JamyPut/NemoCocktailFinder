import React, {useEffect, useState, useRef} from "react";
import "./Register.css"
import axios from "axios";
import {Link} from "react-router-dom";

const usernameREGEX = /.{6,24}/;
const passREGEX = /.{6,24}/;
const emailREGEX = /@/;

const Register = () =>{

    const [username, setUsername] = useState("");
    const [pass, setPass] = useState("");
    const [confirmPass, setConfirmPass] = useState("");
    const [email, setEmail] = useState("");

    const [validUsername, setValidUsername] = useState(false);
    const [validPass, setValidPass] = useState(false);
    const [validConfirmedPass, setValidConfirmedPass] = useState(false)
    const [validEmail, setValidEmail] = useState(false)

    const [errorMessage, setErrorMessage] = useState("")
    const [succes, setSucces] = useState("")

    useEffect(() => {
        const result = usernameREGEX.test(username);
        console.log(result);
        console.log(username);
        setValidUsername(result);
    }, [username])

    useEffect(() => {
        const result = passREGEX.test(pass);
        console.log(result);
        console.log(pass);
        setValidPass(result);
        const checkConfirmedPass = pass === confirmPass;
        setValidConfirmedPass(checkConfirmedPass);
    }, [pass, confirmPass])

    useEffect(() => {
        setErrorMessage("");
    }, [username, pass, confirmPass])


// function Register(){

    const [fetchedData, setFetcheddata] = useState()
    const [url, seturl] = useState()
    const serverUrl = "https://frontend-educational-backend.herokuapp.com/api/test/all"

    const testServer = () => {
        axios.get(serverUrl)
            .then(res => {
                console.log(res.data)
                setFetcheddata(res.data)
                console.log(fetchedData)
            })
            .catch(e => console.log(e));
    }
    return(
        <div  className={"register-page-styling"}>
            <section>
                <h1>Dit is de register pagina</h1>
                <button onClick={testServer}>klik hier</button>
                <p>api informatie: {fetchedData}</p>
            </section>
            <section className={"register-form-section"}>
                <form>
                    <h3>Vul de gegevens in</h3>
                    <hr className={"rounded"}/>
                    <label htmlFor="username">Gebruikersnaam:</label>
                    <input
                        placeholder={"Naam"}
                        type="text"
                        id={"username"}
                        autoComplete={"off"}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                    <label htmlFor="email">Email:</label>
                    <input
                        placeholder={"Email"}
                        type="email"
                        id={"email"}
                        autoComplete={"off"}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <label htmlFor="pass">Wachtwoord:</label>
                    <input
                        placeholder={"********"}
                        type="password"
                        id={"pass"}
                        onChange={(e) => setPass(e.target.value)}
                    />
                    <label htmlFor="confirmPass">Bevestig wachtwoord:</label>
                    <input
                        placeholder={"********"}
                        type="password"
                        id={"confirmPass"}
                        onChange={(e) => setConfirmPass(e.target.value)}
                    />
                    <button disabled={!validUsername || !validEmail || !validPass || !validConfirmedPass}>
                        Inloggen
                    </button>
                </form>
                <hr className={"rounded"}/>
                <Link to={"/login"}>Heb je al een account? klik hier om in te loggen</Link>
            </section>
        </div>

    );
}
export default Register;