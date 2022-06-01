const router = require('express').Router();
const Order = require('../models/order');

router.get('/', async (req, res) => {    
    try {
        const allOrders = await Order.find({ });
        return res.status(200).send(allOrders);
     
    } catch(err) {
        return res.status(400).send({message: 'Wystąpił błąd. Obrazy nie zostały znalezione.'});
    }
});

router.post('/add', async (req, res) => {
    const { products, date, orderNo, amount } = req.body;

    const product = products.split(', ');

    const order = new Order({
        date,
        orderNo,
        product,
        amount
    })

    order.save((err) => {
        if (err) res.status(400).send({ 
            responseMessage: 'Wystąpił błąd. Zamówienie nie zostało dodane.',
            success: false
        });
        else return res.status(200).send({ 
            responseMessage: 'Dodano zamówienie', 
            success: true
        }); 
    });
});

module.exports = router;