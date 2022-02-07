const router = require('express').Router();
const dotenv = require('dotenv');
dotenv.config({ path: './.env' });
const stripe = require('stripe')(process.env.STRIPE_SECRET);
const { calculateTotalPrice } = require('../utils/calculateTotalPrice');

router.post('/', async (req, res) => {
    try {
        const { items, delivery, promotion } = req.body;
       
        const { email } = delivery;

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