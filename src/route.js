import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './components/Home/Home.js';
import About from './components/About/About.js';
import Products from './components/Products/Products.js';
import ProductItems from './components/ProductItems/productItems.js';
import NavBar from './components/NavBar/NavBar.js';

export default function Routes() {

    return (
        <div>
            <Router>

                <NavBar />

                <Switch>
                    <Route exact path="/" component={Home}>
                        {/* <Home /> */}
                    </Route>
                    <Route exact path="/About" component={About}>
                        {/* <About /> */}
                    </Route>
                    <Route exact path="/Products" component={Products}>
                        {/* <Products /> */}
                    </Route>
                    <Route exact path="/Products/:id" component={ProductItems}>
                        {/* <ProductItems /> */}
                    </Route>
                    <Route path="/*" component={() => <p>Error Not Found</p>}>
                        {/* <Home /> */}
                    </Route>
                </Switch>

            </Router>
        </div>
    )

}