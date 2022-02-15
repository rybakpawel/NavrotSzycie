const defaultState = {
    allProducts: [],
    allCategories: [],
    product: null,
    categoryProducts: [],
    newProducts: null,
    similarProducts: null,
};

const productReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'GET_ALL_PRODUCTS':
            return {
                ...state,
                allProducts: action.payload
            };

        case 'GET_ALL_CATEGORIES':
            return {
                ...state,
                allCategories: action.payload
            };

        case 'GET_PRODUCT':
            return {
                ...state,
                product: action.payload
            };

        case 'GET_CATEGORY_PRODUCTS':
            return {
                ...state,
                categoryProducts: action.payload
            };

        case 'GET_NEW_PRODUCTS':
            return {
                ...state,
                newProducts: action.payload
            };
        case 'GET_SIMILAR_PRODUCTS':
            return {
                ...state,
                similarProducts: action.payload
            };

        default:
            return state;
    };
};

export default productReducer;