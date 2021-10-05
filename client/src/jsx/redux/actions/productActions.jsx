export const getProductsList = () => async dispatch => {
    try {
        const res = await fetch('http://localhost:5000/products');
        const data = await res.json();

        dispatch({
            type: 'GET_ALL_PRODUCTS',
            payload: {
                data
            }
        });
    } catch {
        console.log('blad')
    }
};

export const getCategoriesList = () => async dispatch => {
    try {
        const res = await fetch('http://localhost:5000/categories');
        const data = await res.json();

        dispatch({
            type: 'GET_ALL_CATEGORIES',
            payload: {
                data
            }
        });
    } catch {
        console.log('blad')
    }
};

export const getCategoryProducts = (category) => async dispatch => {
    try {
        const res = await fetch(`http://localhost:5000/${category}`);
        const data = await res.json();

        dispatch({
            type: 'GET_CATEGORY_PRODUCTS',
            payload: {
                data
            }
        });
    } catch {
        console.log('blad')
    }
};