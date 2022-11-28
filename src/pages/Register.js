import React, {useEffect, useState, useRef} from "react";
import "./Register.css"
import axios from "axios";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheck, faInfoCircle, faRemove} from "@fortawesome/free-solid-svg-icons";

const usernameREGEX = /^.{6,24}$/;
const passREGEX = /^.{6,24}$/;
const emailREGEX = /^\S+@\S+$/;
const role = ["user"]

const serverUrl = "https://frontend-educational-backend.herokuapp.com/api/auth/signup"

const Register = () => {

    const userRef = useRef();

    const [username, setUsername] = useState("");
    const [pass, setPass] = useState("");
    const [confirmPass, setConfirmPass] = useState("");
    const [email, setEmail] = useState("");

    const [validUsername, setValidUsername] = useState(false);
    const [validPass, setValidPass] = useState(false);
    const [validConfirmedPass, setValidConfirmedPass] = useState(false);
    const [validEmail, setValidEmail] = useState(false);


    const [userFocus, setUserFocus] = useState(false);
    const [emailFocus, setEmailFocus] = useState(false);
    const [passFocus, setPassFocus] = useState(false);
    const [confirmedPassFocus, setConfirmedPassFocus] = useState(false);

    const [errorMessage, setErrorMessage] = useState("");
    const [succes, setSucces] = useState(false);

    useEffect(() => {
        userRef.current.focus()
    }, []);

    useEffect(() => {
        const result = usernameREGEX.test(username);
        console.log(result);
        console.log(username);
        setValidUsername(result);
    }, [username]);

    useEffect(() => {
        const result = emailREGEX.test(email);
        console.log(result);
        console.log(email);
        setValidEmail(result);
    }, [email]);

    useEffect(() => {
        const result = passREGEX.test(pass);
        console.log(result);
        console.log(pass);
        console.log(confirmPass)
        console.log(validConfirmedPass)
        setValidPass(result);
        const checkConfirmedPass = pass === confirmPass;
        setValidConfirmedPass(checkConfirmedPass);
    }, [pass, confirmPass]);

    useEffect(() => {
        setErrorMessage("");
    }, [username, pass, confirmPass, email]);

    const registerUser = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(serverUrl, JSON.stringify({
                username, password: pass, email, role
            }), {
                headers: {"Content-Type": "application/json"}
            })
            setSucces(true);
            console.log(response);
            console.log(response.data);
        } catch (error) {
            if (!error?.response) {
                setErrorMessage("No response from server");
            } else {
                console.log(error.response);
                setErrorMessage(error.response.data.message);
            }
        }
    };

    if (succes) {
        return (
            <div className={"register-page-styling"}>
                <section className={"register-succes"}>
                    <h1>Registratie succesvol!</h1>
                    <Link id={"login-link"} to={"/login"}>Inloggen</Link>
                </section>
            </div>
        )
    }
    return (
        <div className={"register-page-styling"}>
            <div>
                <section>
                    <h1>Dit is de register pagina</h1>
                </section>
                <section className={"register-form-section"}>
                    <p>{errorMessage}</p>
                    <form onSubmit={registerUser}>
                        <h3>Vul de gegevens in</h3>
                        <hr className={"rounded"}/>
                        <label htmlFor="username">
                            Gebruikersnaam:
                            <span className={validUsername ? "valid" : "hidden"}>
                            <FontAwesomeIcon icon={faCheck}/>
                        </span>
                            <span className={validUsername || !username ? "hidden" : "invalid"}>
                            <FontAwesomeIcon icon={faRemove}/>
                        </span>
                        </label>
                        <input
                            placeholder={"Naam"}
                            type="text"
                            id={"username"}
                            ref={userRef}
                            onFocus={() => setUserFocus(true)}
                            onBlur={() => setUserFocus(false)}
                            autoComplete={"off"}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                        <p className={userFocus && username && !validUsername ? "registration-help" : "invisible"}>
                            <FontAwesomeIcon icon={faInfoCircle}/>
                            gebruik minstens 6 tekens en maximaal 24 tekens.
                        </p>
                        <label htmlFor="email">
                            Email:
                            <span className={validEmail ? "valid" : "hidden"}>
                            <FontAwesomeIcon icon={faCheck}/>
                        </span>
                            <span className={validEmail || !email ? "hidden" : "invalid"}>
                            <FontAwesomeIcon icon={faRemove}/>
                        </span>
                        </label>
                        <input
                            placeholder={"Email"}
                            type="email"
                            id={"email"}
                            autoComplete={"off"}
                            onChange={(e) => setEmail(e.target.value)}
                            onFocus={() => setEmailFocus(true)}
                            onBlur={() => setEmailFocus(false)}
                        />
                        <p className={emailFocus && email && !validEmail ? "registration-help" : "invisible"}>
                            <FontAwesomeIcon icon={faInfoCircle}/>
                            Email adres is ongeldig, controleer wat u heeft ingevuld.
                        </p>
                        <label htmlFor="pass">
                            Wachtwoord:
                            <span className={validPass ? "valid" : "hidden"}>
                            <FontAwesomeIcon icon={faCheck}/>
                        </span>
                            <span className={validPass || !pass ? "hidden" : "invalid"}>
                            <FontAwesomeIcon icon={faRemove}/>
                        </span>
                        </label>
                        <input
                            placeholder={"******"}
                            type="password"
                            id={"pass"}
                            onChange={(e) => setPass(e.target.value)}
                            onFocus={() => setPassFocus(true)}
                            onBlur={() => setPassFocus(false)}
                        />
                        <p className={passFocus && pass && !validPass ? "registration-help" : "invisible"}>
                            <FontAwesomeIcon icon={faInfoCircle}/>
                            gebruik minstens 6 tekens en maximaal 24 tekens.
                        </p>
                        <label htmlFor="confirmPass">
                            Bevestig wachtwoord:
                            <span className={validConfirmedPass && pass && confirmPass ? "valid" : "hidden"}>
                            <FontAwesomeIcon icon={faCheck}/>
                        </span>
                            <span className={validConfirmedPass || !confirmPass ? "hidden" : "invalid"}>
                            <FontAwesomeIcon icon={faRemove}/>
                        </span>
                        </label>
                        <input
                            placeholder={"******"}
                            type="password"
                            id={"confirmPass"}
                            onChange={(e) => setConfirmPass(e.target.value)}
                            onFocus={() => setConfirmedPassFocus(true)}
                            onBlur={() => setConfirmedPassFocus(false)}
                        />
                        <p className={confirmedPassFocus && confirmPass && !validConfirmedPass ? "registration-help" : "invisible"}>
                            <FontAwesomeIcon icon={faInfoCircle}/>
                            Wachtwoord komt niet overeen.
                        </p>
                        <button disabled={!validUsername || !validEmail || !validPass || !validConfirmedPass}>
                            Registreren
                        </button>
                    </form>
                    <hr className={"rounded"}/>
                    <Link id={"login-link"} to={"/login"}>Heb je al een account? klik hier om in te loggen</Link>
                </section>
            </div>
        </div>

    );
}
export default Register;