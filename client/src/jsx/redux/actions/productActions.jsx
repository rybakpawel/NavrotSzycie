export const getProductsList = () => async dispatch => {
    try {
        const res = await fetch('http://localhost:5000/products/all');
        const data = await res.json();

        dispatch({
            type: 'GET_ALL_PRODUCTS',
            payload: {
                data
            }
        });
    } catch {
        console.log('blad');
    }
};

export const getCategoriesList = () => async dispatch => {
    try {
        const res = await fetch('http://localhost:5000/products/categories');
        const data = await res.json();

        dispatch({
            type: 'GET_ALL_CATEGORIES',
            payload: {
                data
            }
        });
    } catch {
        console.log('blad');
    }
};

export const getProduct = (category, name) => async dispatch => {
    try {
        const res = await fetch(`http://localhost:5000/products/${category}/${name}`);
        const data = await res.json();

        dispatch({
            type: 'GET_PRODUCT',
            payload: {
                data
            }
        });
    } catch {
        console.log('błąd');
    }
}

export const getProductsFromCategory = (category) => async dispatch => {
    try {
        const res = await fetch(`http://localhost:5000/products/${category}`);
        const data = await res.json();

        dispatch({
            type: 'GET_CATEGORY_PRODUCTS',
            payload: {
                data
            }
        });
    } catch {
        console.log('blad');
    }
};

export const getNewProducts = () => async dispatch => {
    try {
        const res = await fetch('http://localhost:5000/products/new');
        const data = await res.json();

        dispatch({
            type: 'GET_NEW_PRODUCTS',
            payload: {
                data
            }
        });
    } catch {
        console.log('blad');
    }
}

export const getSimilarProducts = (category) => async dispatch => {
    try {
        const res = await fetch(`http://localhost:5000/products/${category}/similar`);
        const data = await res.json();

        dispatch({
            type: 'GET_SIMILAR_PRODUCTS',
            payload: {
                data
            }
        });
    } catch {
        console.log('blad');
    }
}