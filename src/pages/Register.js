import React from "react";
import "./Register.css"
import {useState} from "react";
import axios from "axios";

function Register(){

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
            <h1>Dit is de register pagina</h1>
            <button onClick={testServer}>klik hier</button>
            <p>api informatie: {fetchedData}</p>
        </div>
    );
}
export default Register;