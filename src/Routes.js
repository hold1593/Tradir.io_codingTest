import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import Home from "./Pages/Home";
import BeerList from "./Pages/BeerList";
import Cart from "./Pages/Cart";

const Routes = () => {

  return (
    <Router>
        <Switch>
          <Route path="/" component={Home} exact/>
          <Route path="/beerlist" component={BeerList}/>
          <Route path="/cart" component={Cart}/>
        </Switch>
    </Router>
  );
};

export default Routes;
