const defaultState = {
    cartProducts: []
}

const cartReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            const product = action.payload;
            const existProduct = state.cartProducts.find((item) => item._id === product._id);

            if (existProduct) {
                return {
                    ...state,
                    cartProducts: state.cartProducts.map((item) => item._id === existProduct._id ? product : item),
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

        case 'CHANGE_QUANTITY':
            const { id, overallQuantity, calculation } = action.payload;

            const calculateQuantity = (item, overallQuantity, calculation) => {
                if (calculation === '-') {
                    item.quantity > 1 ? item.quantity -= 1 : null
                } else {
                    item.quantity < overallQuantity ? item.quantity += 1 : null
                }
            };

            const productsAfterQuantityChange = state.cartProducts.map((item) => {
                if (item._id === id) {
                    calculateQuantity(item, overallQuantity, calculation);
                    return item;
                } else {
                    return item
                }
            });

            return {
                ...state,
                cartProducts: productsAfterQuantityChange
            }

        default:
            return state;
    };
};

export default cartReducer;