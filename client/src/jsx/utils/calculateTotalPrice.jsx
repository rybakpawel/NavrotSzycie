export const calculateTotalPrice = (allProducts, promotion) => {
    let totalPrice = 0;

    allProducts.forEach(product => {
        totalPrice += product.price * product.quantity;
    });

    if (promotion > 0) {
        const productsWithoutPromotion = allProducts.filter((product) => {
            return product.promotion === false;
        });

        let priceOfProductsWithoutPromotion = 0;

        productsWithoutPromotion.forEach(product => {
            priceOfProductsWithoutPromotion += product.price * product.quantity;
        });

        totalPrice = totalPrice - (priceOfProductsWithoutPromotion * (promotion / 100));
    }

    totalPrice = totalPrice.toFixed(2);

    return totalPrice;
}