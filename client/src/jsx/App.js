import React from 'react';
import '../styles/style.css';
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import HomePage from './pages/HomePage';
import ProductsListPage from './pages/ProductsListPage';
import ProductPage from './pages/ProductPage';
import AboutMePage from './pages/AboutMePage';

function App() {
    return (
        <>
            <BrowserRouter>
                <Switch>
                    <Route path='/' exact component={HomePage} />
                    <Route path='/aboutme' exact component={AboutMePage} />
                    <Route path='/:category' exact component={ProductsListPage} />
                    <Route path='/:category/:name' component={ProductPage} />
                    <Redirect to='/' />
                </Switch>
            </BrowserRouter>
        </>
    )
}
export default App;