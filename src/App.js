import './App.css';
import {Route, Routes} from "react-router-dom";
import React, {useEffect} from 'react';
import NavBar from "./components/NavBar/NavBar";
import Home from "./pages/Home"
import Faq from "./pages/Faq";
import Cocktails from "./pages/Cocktails";
import Profile from "./pages/Profile";
import CocktailDetails from "./pages/CocktailDetails";
import Login from "./pages/Login";
import Register from "./pages/Register";
import RequireAuth from "./helpers/RequireAuth"

function App() {
    const localStorageDummy = () =>{
        const bar = undefined
        const dummyArray = [
            {foo:bar}
        ]
        localStorage.setItem("favoriteCocktails", JSON.stringify(dummyArray))
    }

    useEffect(() =>{
        localStorageDummy()
    },[])
    return (
        <div className={"page-background"}>
            <header>
                <NavBar/>
            </header>
            <Routes>
                {/*public routes*/}
                <Route path={"/"} element={<Home/>}/>
                <Route path={"/cocktails"} element={<Cocktails/>}/>
                <Route path={"/faq"} element={<Faq/>}/>
                <Route path={"/login"} element={<Login/>}/>
                <Route path={"/register"} element={<Register/>}/>
                <Route path={"/:cocktailid"} element={<CocktailDetails/>}/>
                <Route path={"/register"} element={<Register/>}/>
                {/*protected routes*/}
                {/*<Route element={<RequireAuth/>}>*/}
                    <Route path={"/profile"} element={<Profile/>}/>
                {/*</Route>*/}
            </Routes>
        </div>
    );
}

export default App;