import './App.css';
import {Link, Route, Switch} from "react-router-dom";
import React, { useState } from 'react';
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
      <div className={"page-background"}>
          <header>
              <NavBar/>
          </header>
          <Switch>

          </Switch>
          <footer>

          </footer>
      </div>
  );
}

export default App;
