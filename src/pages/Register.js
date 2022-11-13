import React, {useEffect, useState} from "react";
import "./Register.css"
import axios from "axios";
import {Link} from "react-router-dom";

const usernameREGEX = /.{6,24}/;
const passREGEX = /.{6,24}/;
const emailREGEX = /@/;
const role = ["user"]

const serverUrl = "https://frontend-educational-backend.herokuapp.com/api/auth/signup"

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

    useEffect(() => {
        const result = usernameREGEX.test(username);
        console.log(result);
        console.log(username);
        setValidUsername(result);
    }, [username])

    useEffect(() => {
        const result = emailREGEX.test(email);
        console.log(result);
        console.log(email);
        setValidEmail(result);
    }, [email])

    useEffect(() => {
        const result = passREGEX.test(pass);
        console.log(result);
        console.log(pass);
        console.log(confirmPass)
        console.log(validConfirmedPass)
        setValidPass(result);
        const checkConfirmedPass = pass === confirmPass;
        setValidConfirmedPass(checkConfirmedPass);
    }, [pass, confirmPass])

    useEffect(() => {
        setErrorMessage("");
    }, [username, pass, confirmPass])

    const registerUser = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(serverUrl, JSON.stringify({
                username, password: pass, email, role }),{
                headers: {"Content-Type": "application/json"}
            })
            console.log(response)
            console.log(response.data)
        } catch (error){
            if (!error?.response){
                setErrorMessage("No response from server");
            } else {
                console.log(error.response)
                setErrorMessage(error.response.data.message)
            }
        }
    }




    return(
        <div  className={"register-page-styling"}>
            <section>
                <h1>Dit is de register pagina</h1>
            </section>
            <section className={"register-form-section"}>
                <p>{errorMessage}</p>
                <form onSubmit={registerUser}>
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
                        placeholder={"******"}
                        type="password"
                        id={"pass"}
                        onChange={(e) => setPass(e.target.value)}
                    />
                    <label htmlFor="confirmPass">Bevestig wachtwoord:</label>
                    <input
                        placeholder={"******"}
                        type="password"
                        id={"confirmPass"}
                        onChange={(e) => setConfirmPass(e.target.value)}
                    />
                    <button disabled={!validUsername || !validEmail || !validPass || !validConfirmedPass}>
                        Registreren
                    </button>
                </form>
                <hr className={"rounded"}/>
                <Link to={"/login"}>Heb je al een account? klik hier om in te loggen</Link>
            </section>
        </div>

    );
}
export default Register;