import React, {useState} from "react";
import "./Login.css"
import { Link } from "react-router-dom";
import axios from "axios";

function Login(){

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
        <div className={"login-page-styling"}>
            <h1>Dit is de login pagina</h1>
            <button onClick={testServer}>klik hier</button>
            <p>api informatie: {fetchedData}</p>
            <section>
                <p>nog niet ingelogd?</p>
                <Link to={"/register"}>klik hier</Link>
            </section>
        </div>
    );
}
export default Login