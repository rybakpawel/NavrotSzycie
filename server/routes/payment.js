const router = require('express').Router();
const dotenv = require('dotenv');
dotenv.config({ path: './.env' });
const stripe = require('stripe')(process.env.STRIPE_SECRET);

router.post('/', async (req, res) => {
    try {
        const { items, delivery, promotion } = req.body;
       
        const { email } = delivery;

        const calculateTotalPrice = (allProducts, promotion) => {
            let totalPrice = 0;
        
            allProducts.forEach(product => {
                totalPrice += product.price;
            });

            if (promotion > 0) {
                const productsWithoutPromotion = allProducts.filter((product) => {
                    return product.promotion === false;
                });
        
                let priceOfProductsWithoutPromotion = 0;
        
                productsWithoutPromotion.forEach(product => {
                    priceOfProductsWithoutPromotion += product.price;
                });
        
                totalPrice = totalPrice - (priceOfProductsWithoutPromotion * (promotion / 100));
            }

            totalPrice *= 100;
        
            return totalPrice.toFixed();
        }

        const paymentIntent = await stripe.paymentIntents.create({
            amount: calculateTotalPrice(items, promotion),
            currency: 'pln',
            payment_method_types: ['card', 'p24'],
            receipt_email: email
          });

        res.status(200).send({
             clientSecret: paymentIntent.client_secret
        });
    } catch {
        const message = 'Server Error';
        res.status(500).send({ message });
    }
})

module.exports = router;