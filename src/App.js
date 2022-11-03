import './App.css';
import {Link, Route, Switch} from "react-router-dom";
import React, { useState } from 'react';
import NavBar from "./components/NavBar/NavBar";
import Home from "./pages/Home"
import Faq from "./pages/faq";
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
              <Route path={"/faq"}>
                  <Faq/>
              </Route>
          </Switch>
          <footer>

          </footer>
      </div>
  );
}

export default App;
