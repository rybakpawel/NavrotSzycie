const router = require('express').Router();
const dotenv = require('dotenv');
dotenv.config({ path: './.env' });
const stripe = require('stripe')(process.env.STRIPE_SECRET);
const stripeTest = require('stripe')(process.env.STRIPE_SECRET_TEST);
const sendOrderEmail = require('../nodemailer/order');
const Order = require('../models/order');
const { calculateTotalPrice } = require('../utils/calculateTotalPrice');

router.post('/', async (req, res) => {
    try {
        const { items, delivery, promotion } = req.body;
        const { email, firstName, lastName, provider } = delivery;
        
        const deliveryCost = provider === 'pocztex' ? 15.99 : 13.99
        const totalAmount = parseInt(calculateTotalPrice(items, promotion), 10) + (deliveryCost * 100)

        const customer = await stripeTest.customers.create({
            email,
            name: `${firstName} ${lastName}`
        });

        const date = new Date();
        const itemsNames = items.map(item => {
            return item.name
        })

        const allOrders = await Order.find({ });
        const ordersOfThisMonth = allOrders.map(order => {
            if (order.orderNo.includes(('0' + (date.getMonth() + 1)).slice(-2)) + '/' + date.getFullYear().toString().substr(-2)) return order
        });
    
        const order = new Order({
            date: ('0' + date.getDate()).slice(-2) + '/' + ('0' + (date.getMonth() + 1)).slice(-2) + '/' + date.getFullYear().toString().substr(-2),
            orderNo: ('0' + (ordersOfThisMonth.length + 1)).slice(-2) + '/' + ('0' + (date.getMonth() + 1)).slice(-2) + '/' + date.getFullYear().toString().substr(-2),
            product: itemsNames,
            amount: totalAmount / 100
        });

        order.save();

        // const paymentIntent = await stripe.paymentIntents.create({
        const paymentIntent = await stripeTest.paymentIntents.create({
            amount: totalAmount,
            currency: 'pln',
            customer: customer.id,
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