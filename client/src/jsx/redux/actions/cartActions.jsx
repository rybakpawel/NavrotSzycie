export const addToCart = (category, name) => async (dispatch, getState) => {
    try {
        const res = await fetch(`https://admin.navrot-szycie.pl/products/${category}/${name}`);
        const data = await res.json();

        const { addDate, care, images, description, height, materials, price, priceWithPromotion, promotion, promotionSize, quantity, width, _id } = data;

        const newProduct = {
            addDate,
            care,
            category: data.category,
            images,
            description,
            height,
            materials,
            name: data.name,
            price,
            priceWithPromotion,
            promotion,
            promotionSize,
            quantity: 1,
            overallQuantity: quantity,
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

export const changeQuantity = (id, overallQuantity, calculation) => (dispatch, getState) => {
    dispatch({
        type: 'CHANGE_QUANTITY',
        payload: {
            id,
            overallQuantity,
            calculation
        }
    });

    localStorage.setItem('cart', JSON.stringify(getState().cartReducer.cartProducts));
};