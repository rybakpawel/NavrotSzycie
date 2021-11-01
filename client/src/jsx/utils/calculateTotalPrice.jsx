export const calculateTotalPrice = (allProducts) => {
    let totalPrice = 0;

    allProducts.forEach(product => {
        totalPrice += product.price;
    });

    return totalPrice.toFixed(2);
}