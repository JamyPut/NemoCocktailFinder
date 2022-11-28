import React from "react";
import "./FaQuestion.css"

function FaQuestion(props) {
    return (
        <article className={"question-article"}>
            <h2>{props.title}</h2>
            <hr className={"rounded"}/>
            <p>{props.answer}</p>
        </article>
    )
}

export default FaQuestion