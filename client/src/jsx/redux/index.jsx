import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import productReducer from "./reducers/productReducer";
import cartReducer from "./reducers/cartReducer";

const allReducers = combineReducers({
    productReducer,
    cartReducer
});

const cartItemsInLocalStorage = localStorage.getItem('cart')
    ? JSON.parse(localStorage.getItem('cart'))
    : [];

const DEFAULT_STATE = {
    cart: {
        cartProducts: cartItemsInLocalStorage,
    },
};

const store = createStore(
    allReducers,
    DEFAULT_STATE,
    composeWithDevTools(
        applyMiddleware(thunk)
    )
);

export default store;

