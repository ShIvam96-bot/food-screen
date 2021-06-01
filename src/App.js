import './App.css';
import Welcome from './Welcome.js';
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Items from "./Items.js";
import Checkout from "./Checkout.js";

function App() {
  return (
    <div className="app">
      <Router><Switch>
      <Route path="/" exact component={Welcome} />
      <Route path="/Items" component={Items} />
      <Route path="/Checkout" component={Checkout} />
      </Switch></Router>
    </div>
  );
}

export default App;
