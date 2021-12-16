import React from 'react';
import '../styles/style.css';
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import HomePage from './pages/HomePage';
import AboutMePage from './pages/AboutMePage';
import ContactPage from './pages/ContactPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import ProductsListPage from './pages/ProductsListPage';
import ProductPage from './pages/ProductPage';

function App() {
    return (
        <>
            <BrowserRouter>
                <Switch>
                    <Route path='/' exact component={HomePage} />
                    <Route path='/aboutme' exact component={AboutMePage} />
                    <Route path='/contact' exact component={ContactPage} />
                    <Route path='/cart' exact component={CartPage} />
                    <Route path='/checkout/delivery' exact render={(props) => (<CheckoutPage {...props} step='delivery' />)} />
                    <Route path='/checkout/payment' exact render={(props) => (<CheckoutPage {...props} step='payment' />)} />
                    <Route path='/checkout/summary' exact render={(props) => (<CheckoutPage {...props} step='summary' />)} />
                    <Route path='/:category' exact component={ProductsListPage} />
                    <Route path='/:category/:name' component={ProductPage} />
                    <Redirect to='/' />
                </Switch>
            </BrowserRouter>
        </>
    )
}
export default App;