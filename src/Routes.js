import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import Home from "./Pages/Home";
import BeerList from "./Pages/BeerList";

const Routes = () => {

  return (
    <Router>
        <Switch>
          <Route path="/home" component={Home}/>
          <Route path="/beerlist" component={BeerList}/>
        </Switch>
    </Router>
  );
};

export default Routes;
