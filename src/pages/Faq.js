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
                    title={"Hoe pas ik mijn favorieten lijst aan?"}
                    answer={"Klik op favoriet toevoegen om de cocktail aan favorieten toe te voegen." +
                        "klik op verwijderen om de cocktail uit favorieten te verwijderen."}
                />
                <FaQuestion
                    title={"Kan ik mijn lijsten bewaren voor een later bezoek aan de website?"}
                    answer={"De lijst blijft bewaard totdat je browsercookies gewist worden."}
                />
                <FaQuestion
                    title={"Waar kan ik mijn favorieten vinden?"}
                    answer={"De lijst met favorieten is te vinden op de profiel pagina." +
                        "klik op het refresh icoon dat zich naast de favorieten titel bevind om je favorieten op te halen/bij te werken"}
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