import React from "react";
import {NavLink} from "react-router-dom";
import "./FaQuestion.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSquare} from "@fortawesome/free-solid-svg-icons";

function FaQuestion(props){
    return(
        <article className={"question-article"}>
            <h2>{props.title}</h2>
            <hr className={"rounded"}/>
            <p>{props.answer}</p>
        </article>
    )
}
export default FaQuestion