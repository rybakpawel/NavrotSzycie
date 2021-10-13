const defaultState = {
    isLoading: false,
    productsList: []
}

const productReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'GET_ALL_PRODUCTS':
            return {
                ...state,
                productsList: action.payload.data
            };

        case 'GET_ALL_CATEGORIES':
            return {
                ...state,
                categoryList: action.payload.data
            };

        case 'GET_CATEGORY_PRODUCTS':
            return {
                ...state,
                categoryProducts: action.payload.data
            }

        case 'GET_NEW_PRODUCTS':
            return {
                ...state,
                newProducts: action.payload.data
            }

        default:
            return state;
    }
};

export default productReducer;