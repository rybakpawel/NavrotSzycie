export const calculateTotalPrice = (allProducts, promotionCode) => {
    let totalPrice = 0;

    allProducts.forEach(product => {
        if (product.promotion) {
            totalPrice += product.priceWithPromotion * product.quantity;
        } else {
            totalPrice += product.price * product.quantity;
        }
    });

    if (promotionCode > 0) {
        const productsWithoutPromotionCode = allProducts.filter((product) => {
            return product.promotion === false;
        });

        let priceOfProductsWithoutPromotionCode = 0;

        productsWithoutPromotionCode.forEach(product => {
            priceOfProductsWithoutPromotionCode += product.price * product.quantity;
        });

        totalPrice = totalPrice - (priceOfProductsWithoutPromotionCode * (promotionCode / 100));
    }

    totalPrice = totalPrice.toFixed(2);

    return totalPrice;
}