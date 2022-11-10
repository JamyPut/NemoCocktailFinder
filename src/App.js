import './App.css';
import {Link, Route, Switch} from "react-router-dom";
import React, {useState} from 'react';
import NavBar from "./components/NavBar/NavBar";
import Home from "./pages/Home"
import Faq from "./pages/Faq";
import Cocktails from "./pages/Cocktails";
import Profile from "./pages/Profile";
import CocktailDetails from "./pages/CocktailDetails";
import Login from "./pages/Login";
import Register from "./pages/Register";


function App() {
    return (
        <div className={"page-background"}>
            <header>
                <NavBar/>
            </header>
            <Switch>
                <Route exact path={"/"}>
                    <Home/>
                </Route>
                <Route path={"/cocktails"}>
                    <Cocktails/>
                </Route>
                <Route path={"/faq"}>
                    <Faq/>
                </Route>
                <Route path={"/profile"}>
                    <Profile/>
                </Route>
                <Route path={"/login"}>
                    <Login/>
                </Route>
                <Route path={"/register"}>
                    <Register/>
                </Route>
                <Route path={"/:cocktailid"}>
                    <CocktailDetails/>
                </Route>
            </Switch>
            <footer>
                <p>NemoCocktailFinder door Jamy Put | Novi frontend eindopdracht nov 22'</p>
            </footer>
        </div>
    );
}

export default App;
