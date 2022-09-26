import React from 'react';
import '../styles/style.css';
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import CookieConsent from 'react-cookie-consent'
import HomePage from './pages/HomePage';
import AboutMePage from './pages/AboutMePage';
import AdminPage from './pages/AdminPage';
import ContactPage from './pages/ContactPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import ProductsListPage from './pages/ProductsListPage';
import ProductPage from './pages/ProductPage';
import RulesPage from './pages/RulesPage';

function App() {
    return (
        <>
            <BrowserRouter>
                <Switch>
                    <Route path='/' exact component={HomePage} />
                    <Route path='/aboutme' exact component={AboutMePage} />
                    <Route path='/admin' exact component={AdminPage} />
                    <Route path='/admin/:item' exact component={AdminPage} />
                    <Route path='/admin/:item/:action' exact component={AdminPage} />
                    <Route path='/contact' exact component={ContactPage} />
                    <Route path='/cart' exact component={CartPage} />
                    <Route path='/checkout/delivery' exact render={(props) => (<CheckoutPage {...props} step='delivery' />)} />
                    <Route path='/checkout/payment' exact render={(props) => (<CheckoutPage {...props} step='payment' />)} />
                    <Route path='/checkout/summary' exact render={(props) => (<CheckoutPage {...props} step='summary' />)} />
                    <Route path='/rules' exact component={RulesPage} />
                    <Route path='/:category' exact component={ProductsListPage} />
                    <Route path='/:category/:name' component={ProductPage} />
                    <Redirect to='/' />
                </Switch>
                <CookieConsent 
                    debug={true}
                    buttonText='Zgoda'>
                    Ta strona korzysta z ciasteczek aby świadczyć usługi na najwyższym poziomie. Dalsze korzystanie ze strony oznacza, że zgadzasz się na ich użycie.
                </CookieConsent>
            </BrowserRouter>
        </>
    )
}
export default App;