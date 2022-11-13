import './App.css';
import {Route, Routes} from "react-router-dom";
import React, {useState} from 'react';
import NavBar from "./components/NavBar/NavBar";
import Home from "./pages/Home"
import Faq from "./pages/Faq";
import Cocktails from "./pages/Cocktails";
import Profile from "./pages/Profile";
import CocktailDetails from "./pages/CocktailDetails";
import Login from "./pages/Login";
import Register from "./pages/Register";
import RequireAuth from "./helpers/RequireAuth"
import Layout from "./helpers/Layout";

function App() {
    return (
        <div className={"page-background"}>
            <header>
                <NavBar/>
            </header>
            <Routes>
                <Route path={"/"} element={<Layout />}>
                    {/*public routes*/}
                    <Route path={"/"} element={<Home/>} />
                    <Route path={"/cocktails"} element={<Cocktails/>}/>
                    <Route path={"/faq"} element={<Faq/>}/>
                    <Route path={"/login"} element={<Login/>}/>
                    <Route path={"/register"} element={<Register/>}/>
                    <Route path={"/:cocktailid"} element={<CocktailDetails/>}/>
                    <Route path={"/register"} element={<Register/>}/>
                    {/*protected routes*/}
                    <Route element={<RequireAuth />}>
                        <Route path={"/profile"} element={<Profile/>}/>
                    </Route>
                </Route>
            </Routes>
        </div>
    );
}
export default App;