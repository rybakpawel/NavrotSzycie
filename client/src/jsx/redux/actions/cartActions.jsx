export const addToCart = (category, name) => async (dispatch, getState) => {
    try {
        const res = await fetch(`http://localhost:5000/products/${category}/${name}`);
        const data = await res.json();

        const { addDate, care, description, height, materials, price, promotion, promotionSize, width, _id } = data;

        const newProduct = {
            addDate,
            care,
            category: data.category,
            description,
            height,
            materials,
            name: data.name,
            price,
            promotion,
            promotionSize,
            quantity: 1,
            width,
            _id
        }

        dispatch({
            type: 'ADD_TO_CART',
            payload: newProduct,
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

export const changeQuantity = (id, calculation) => (dispatch, getState) => {
    dispatch({
        type: 'CHANGE_QUANTITY',
        payload: {
            id,
            calculation
        }
    });

    localStorage.setItem('cart', JSON.stringify(getState().cartReducer.cartProducts));
};