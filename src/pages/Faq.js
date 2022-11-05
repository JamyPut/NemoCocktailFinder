import React from 'react';
import "./Faq.css"
import RandomCocktailComponent from "../components/RandomCocktailComponent/RandomCocktailComponent";
import FaQuestion from "../components/FaqSection/FaQuestion";

function Faq() {
    return (
        <div className={"faq-page-styling"}>
            <h1>Veelgestelde vragen</h1>
            <section className={"question-section"}>
                <FaQuestion
                    title={"Hoe sla ik mijn favorieten lijst op?"}
                    answer={"op de pagina waar de favorieten lijst is weergegeven, " +
                        "klik je op de rechtermuisknop -> print -> opslaan als pdf"}
                />
                <FaQuestion
                    title={"Hoe voeg ik een cocktail toe aan favorieten?"}
                    answer={"Klik op het ster icoon dat zich bij de betreffende cocktail bevind." +
                        "Je cocktail staat nu bij favorieten!"}
                />
                <FaQuestion
                    title={"Kan ik mijn lijsten bewaren voor een later bezoek aan de website?"}
                    answer={"Momenteel is het niet mogelijk lijsten te bewaren." +
                        "De lijst zal worden gewist zodra de pagina gesloten word."}
                />
            </section>
            <section>
                <RandomCocktailComponent/>
            </section>
        </div>
    )
}

export default Faq