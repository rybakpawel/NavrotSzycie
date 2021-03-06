export const getProductsList = () => async dispatch => {
    try {
        const res = await fetch(`${process.env.REACT_APP_SERVER_ADRESS}products/all`);
        const data = await res.json();

        dispatch({
            type: 'GET_ALL_PRODUCTS',
            payload: data
        });
    } catch {
        console.log('Nie można pobrać wszystkich produktów');
    }
};

export const getCategoriesList = () => async dispatch => {
    try {
        const res = await fetch(`${process.env.REACT_APP_SERVER_ADRESS}products/categories`);
        const data = await res.json();

        dispatch({
            type: 'GET_ALL_CATEGORIES',
            payload: data
        });
    } catch {
        console.log('Nie można pobrać wszystkich kategorii');
    }
};

export const getProduct = (category, name) => async dispatch => {
    try {
        const res = await fetch(`${process.env.REACT_APP_SERVER_ADRESS}products/${category}/${name}`);
        const data = await res.json();

        dispatch({
            type: 'GET_PRODUCT',
            payload: data
        });
    } catch {
        console.log('Nie można pobrać produktu');
    }
}

export const getProductsFromCategory = (category) => async dispatch => {
    try {
        const res = await fetch(`${process.env.REACT_APP_SERVER_ADRESS}products/${category}`);
        const data = await res.json();

        dispatch({
            type: 'GET_CATEGORY_PRODUCTS',
            payload: data
        });
    } catch {
        console.log('Nie można pobrać produktów z kategorii');
    }
};

export const getNewProducts = () => async dispatch => {
    try {
        const res = await fetch(`${process.env.REACT_APP_SERVER_ADRESS}products/new`);
        const data = await res.json();

        dispatch({
            type: 'GET_NEW_PRODUCTS',
            payload: data
        });
    } catch {
        console.log('Nie można pobrać nowych produktów');
    }
}

export const getSimilarProducts = (category, name) => async dispatch => {
    try {
        const res = await fetch(`${process.env.REACT_APP_SERVER_ADRESS}products/${category}/similar`);
        const data = await res.json();

        const similarProducts = data.filter(product => {
            return product.name !== name;
        });

        dispatch({
            type: 'GET_SIMILAR_PRODUCTS',
            payload: similarProducts
        });
    } catch {
        console.log('Nie można pobrać podobnych produktów');
    }
}