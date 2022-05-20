const router = require('express').Router();
const dotenv = require('dotenv');
dotenv.config({ path: './.env' });
const stripe = require('stripe')(process.env.STRIPE_SECRET);
const sendOrderEmail = require('../nodemailer/order');
const { calculateTotalPrice } = require('../utils/calculateTotalPrice');

router.post('/', async (req, res) => {
    try {
        const { items, delivery, promotion } = req.body;
        const { email, provider } = delivery;
        
        const deliveryCost = provider === 'pocztex' ? 15.99 : 13.99
        const totalAmount = parseInt(calculateTotalPrice(items, promotion), 10) + (deliveryCost * 100)

        const paymentIntent = await stripe.paymentIntents.create({
            amount: totalAmount,
            currency: 'pln',
            payment_method_types: ['card', 'p24'],
            receipt_email: email
          });
    
        sendOrderEmail(req.body);

        res.status(200).send({
             clientSecret: paymentIntent.client_secret
        });
    } catch {
        const message = 'Server Error';
        res.status(500).send({ message });
    }
})

module.exports = router;