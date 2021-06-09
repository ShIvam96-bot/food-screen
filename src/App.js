import './App.css';
import Login from "./Login.js";
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Registration from "./Registration.js";
import Registration2 from "./Registration2.js";

function App() {
  return (
    <div className="app">
     <Router><Switch>
      <Route path="/" exact component={Login} />
      <Route path="/Registration" component={Registration} />
      <Route path="/Registration2" component={Registration2} />
</Switch></Router> 
    </div>
  );
}

export default App;
