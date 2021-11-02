const defaultState = {
    cartProducts: []
}

const cartReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            const product = action.payload.data;
            const existProduct = state.cartProducts.find((item) => item._id === product._id);

            if (existProduct) {
                return {
                    ...state,
                    cartProducts: state.cartProducts.map((item) => item._id === existItem._id ? product : item),
                }
            } else {
                return {
                    ...state,
                    cartProducts: [...state.cartProducts, product]
                };
            }

        case 'REMOVE_FROM_CART':
            return {
                ...state,
                cartProducts: state.cartProducts.filter((item) => item._id !== action.payload),
            };

        default:
            return state;
    };
};

export default cartReducer;