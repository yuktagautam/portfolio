import React from 'react';
import Home from "./Home";
import {Route,Switch,Redirect} from "react-router-dom";
import  "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import About from "./About";
import Service from "./Service";
import Contact from "./Contact";
import Navbar from "./Navbar";

import './App.css';

const App=()=> {
  return (
    <>
  <Navbar />
  <Switch>
  <Route exact path="/" component={Home}/>
  <Route exact path="/about" component={About}/>
  <Route exact path="/service" component={Service}/>
  <Route exact path="/contact" component={Contact}/>
  <Redirect to="/"/>
  </Switch>
  
    
    </>
  );
}

export default App;
