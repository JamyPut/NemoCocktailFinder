import './App.css';
import {Link, Route, Switch} from "react-router-dom";
import React, { useState } from 'react';
import NavBar from "./components/NavBar/NavBar";
import Home from "./pages/Home"
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
          </Switch>
          <footer>

          </footer>
      </div>
  );
}

export default App;
