const calculateTotalPrice = (allProducts, promotion) => {
    let totalPrice = 0;

    allProducts.forEach(product => {
        totalPrice += product.priceWithPromotion * product.quantity;
    });

    if (promotion > 0) {
        const productsWithoutPromotion = allProducts.filter((product) => {
            return product.promotion === false;
        });

        let priceOfProductsWithoutPromotion = 0;

        productsWithoutPromotion.forEach(product => {
            priceOfProductsWithoutPromotion += product.priceWithPromotion * product.quantity;
        });

        totalPrice = totalPrice - (priceOfProductsWithoutPromotion * (promotion / 100));
    }

    totalPrice *= 100;

    return totalPrice.toFixed();
}

module.exports.calculateTotalPrice = calculateTotalPrice