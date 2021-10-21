import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import productReducer from "./reducers/productReducer";
import cartReducer from "./reducers/cartReducer";

const allReducers = combineReducers({
    productReducer,
    cartReducer
});

const store = createStore(
    allReducers,
    composeWithDevTools(
        applyMiddleware(thunk)
    )
);

export default store;

