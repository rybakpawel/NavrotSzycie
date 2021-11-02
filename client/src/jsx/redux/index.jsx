import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import productReducer from "./reducers/productReducer";
import cartReducer from "./reducers/cartReducer";

const allReducers = combineReducers({
    productReducer,
    cartReducer
});

const cartProductsInLocalStorage = localStorage.getItem('cart')
    ? JSON.parse(localStorage.getItem('cart'))
    : [];

const INITIAL_STATE = {
    cartReducer: {
        cartProducts: cartProductsInLocalStorage,
    },
};

const store = createStore(
    allReducers,
    INITIAL_STATE,
    composeWithDevTools(
        applyMiddleware(thunk)
    )
);

export default store;

