import React from 'react';
import '../styles/style.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import ProductsListPage from './pages/ProductsListPage';

function App() {
    return (
        <>
            <BrowserRouter>
                <Switch>
                    <Route path='/' exact component={HomePage} />
                    <Route path='/purses' render={(props) => (<ProductsListPage {...props} productName={'Torby'} />)}/>
                    <Route path='/bags' render={(props) => (<ProductsListPage {...props} productName={'Worki'} />)}/>
                    <Route path='/neckwarmers' render={(props) => (<ProductsListPage {...props} productName={'Kominy'} />)}/>
                    {/* <Route path='/purses' component={ProductsListPage} /> */}
                </Switch>
            </BrowserRouter>
        </>
        
    );
}
export default App;