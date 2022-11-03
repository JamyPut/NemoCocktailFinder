import React from 'react';
import "./faq.css"
import {NavLink} from "react-router-dom";
import RandomCocktailComponent from "../components/RandomCocktailComponent/RandomCocktailComponent";
import FaQuestion from "../components/FaqSection/FaQuestion";

function Faq(){
    return(
        <div className={"faq-page-styling"}>
            <section>
                <h1>Veelgestelde vragen</h1>
                <h2>Inhoud</h2>
                <section>
                </section>
                <section>
                    <FaQuestion
                        title={"Hoe sla ik mijn favorieten lijst op?"}
                        answer={"op de pagina waar de favorieten lijst is weergegeven, " +
                            "klik je op de rechtermuisknop -> print -> opslaan als pdf"}/>
                </section>
            </section>
            <section>
                <RandomCocktailComponent/>
            </section>

        </div>
    )
}
export default Faq