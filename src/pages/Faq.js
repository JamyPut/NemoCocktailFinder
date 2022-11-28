import React from 'react';
import "./Faq.css"
import RandomCocktailComponent from "../components/RandomCocktailComponent/RandomCocktailComponent";
import FaQuestion from "../components/FaqSection/FaQuestion";

function Faq() {
    return (
        <div className={"faq-page-styling"}>
            <h1 id={"faq-title"}>Veelgestelde vragen</h1>
            <section className={"question-section"}>
                <FaQuestion
                    title={"Hoe sla ik mijn favorieten lijst op?"}
                    answer={"Op de pagina waar de favorieten lijst is weergegeven, " +
                        "klik je met de rechtermuisknop op een lege plek -> print -> opslaan als pdf."}
                />
                <FaQuestion
                    title={"Hoe voeg ik een cocktail toe aan favorieten?"}
                    answer={"Klik op het ster icoon dat zich bij de betreffende cocktail bevindt. " +
                        "Je cocktail staat nu bij favorieten!"}
                />
                <FaQuestion
                    title={"Kan ik mijn lijsten bewaren voor een later bezoek aan de website?"}
                    answer={"Momenteel is het niet mogelijk lijsten te bewaren. " +
                        "De lijst blijft bewaard totdat het tabblad gesloten word."}
                />
                <FaQuestion
                    title={"Waar kan ik mijn favorieten vinden?"}
                    answer={"De lijst met favorieten is te vinden op de profiel pagina."}
                />
                <FaQuestion
                    title={"Hoe kan ik mij registreren?"}
                    answer={"Als je op inloggen klikt verschijnt ook de optie om je te registreren."}
                />
            </section>
            <section>
                <RandomCocktailComponent/>
            </section>
        </div>
    )
}

export default Faq