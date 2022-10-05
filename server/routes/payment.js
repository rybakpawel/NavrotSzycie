const router = require('express').Router();
const dotenv = require('dotenv');
dotenv.config({ path: './.env' });
const fs = require('fs');
const stripe = require('stripe')(process.env.STRIPE_SECRET);
const stripeTest = require('stripe')(process.env.STRIPE_SECRET_TEST);
const sendOrderEmail = require('../nodemailer/order');
const Order = require('../models/order');
const { calculateTotalPrice } = require('../utils/calculateTotalPrice');
const { createInvoicePdf } = require('../utils/createInvoicePdf');

router.post('/', async (req, res) => {
    try {
        const { items, delivery, promotion } = req.body;
        const { email, firstName, lastName, street, buildingNumber, flatNumber, zipCode, city, provider } = delivery;
        
        const deliveryCost = provider === 'pocztex' ? 15.99 : 13.99
        const totalAmount = parseInt(calculateTotalPrice(items, promotion), 10) + (deliveryCost * 100)

        const date = new Date();
        const itemsNames = items.map(item => {
            return item.name
        });

        const allOrders = await Order.find({ });
        const ordersOfThisMonth = allOrders.filter(order => {
            if (order.orderNo.substr(3,2) === (date.getMonth() + 1).toString()) return order
        });

        const orderNo = ('0' + (ordersOfThisMonth.length + 1)).slice(-2) + '/' + ('0' + (date.getMonth() + 1)).slice(-2) + '/' + date.getFullYear().toString().substr(-2)
        const presentDate = ('0' + date.getDate()).slice(-2) + '/' + ('0' + (date.getMonth() + 1)).slice(-2) + '/' + date.getFullYear().toString().substr(-2)

        const itemsInvoice = items.map(item => {
            const itemInvoice = {
                name: item.name,
                price: item.priceWithPromotion,
                quantity: item.overallQuantity
            }
            return itemInvoice
        })
    
        const order = new Order({
            date: presentDate,
            orderNo,
            product: itemsNames,
            amount: totalAmount / 100,
            invoice: {
                firstName,
                lastName,
                street,
                buildingNumber,
                flatNumber,
                zipCode,
                city,
                items: itemsInvoice,
                deliveryCost
            }
        });

        order.save();

        // const paymentIntent = await stripe.paymentIntents.create({
        const paymentIntent = await stripeTest.paymentIntents.create({
            amount: totalAmount,
            currency: 'pln',
            payment_method_types: ['card', 'p24'],
            receipt_email: email
          });

        sendOrderEmail(req.body);
        
        const invoicePdf = createInvoicePdf(orderNo, presentDate, firstName, lastName, street, buildingNumber, flatNumber, zipCode, city, itemsInvoice, totalAmount, deliveryCost);
        
        const orderNoFirstReplace = orderNo.replace('/', '')
        const orderNoSecondReplace = orderNoFirstReplace.replace('/', '')

        invoicePdf.pipe(fs.createWriteStream(`pdf/invoices/Faktura${orderNoSecondReplace}.pdf`));
        invoicePdf.end();

        res.status(200).send({
             clientSecret: paymentIntent.client_secret
        });
    } catch {
        const message = 'Server Error';
        res.status(500).send({ message });
    }
})

module.exports = router;