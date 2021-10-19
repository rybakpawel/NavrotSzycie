import React from 'react';
import '../styles/style.css';
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import HomePage from './pages/HomePage';
import AboutMePage from './pages/AboutMePage';
import ContactPage from './pages/ContactPage';
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
                    <Route path='/:category' exact component={ProductsListPage} />
                    <Route path='/:category/:name' component={ProductPage} />
                    <Redirect to='/' />
                </Switch>
            </BrowserRouter>
        </>
    )
}
export default App;