const defaultState = {
    isLoading: false,
    productsList: []
}

const productReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'GET_PRODUCTS':
            return {
                ...state,
                productsList: action.payload.data
            };

        default:
            return state;
    }
};

export default productReducer;