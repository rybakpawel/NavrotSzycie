const getProductList = () => async dispatch => {
    try {
        const res = await fetch('http://localhost:5000/product');
        const data = await res.json()

        dispatch({
            type: 'GET_PRODUCTS',
            payload: {
                data
            }
        });
    } catch {
        console.log('blad')
    }
}

export default getProductList;