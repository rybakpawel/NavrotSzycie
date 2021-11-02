export const addToCart = (category, name) => async (dispatch, getState) => {
    try {
        const res = await fetch(`http://localhost:5000/${category}/${name}`);
        const data = await res.json();

        dispatch({
            type: 'ADD_TO_CART',
            payload: {
                data
            }
        });

        localStorage.setItem('cart', JSON.stringify(getState().cartReducer.cartProducts));
    } catch {
        console.log('błąd');
    }
}

export const removeFromCart = (id) => (dispatch, getState) => {
    dispatch({
        type: 'REMOVE_FROM_CART',
        payload: id,
    });

    localStorage.setItem('cart', JSON.stringify(getState().cartReducer.cartProducts));
};