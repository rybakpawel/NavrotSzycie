const router = require('express').Router();
const path = require('path');
const fs = require('fs');
const { createInvoicePdf } = require('../utils/createInvoicePdf');
const Order = require('../models/order');
const sendInvoice = require('../nodemailer/invoice');

router.get('/', async (req, res) => {    
    try {
        const allOrders = await Order.find({ });
        return res.status(200).send(allOrders);
     
    } catch(err) {
        return res.status(400).send({message: 'Wystąpił błąd. Obrazy nie zostały znalezione.'});
    }
});

router.post('/add', async (req, res) => {
    const { date, orderNo, product, amount, invoice } = req.body;
    const { firstName, lastName, street, buildingNumber, flatNumber, zipCode, city, items, deliveryCost } = invoice;

    const orderExist = await Order.find({ orderNo });
    if (orderExist.lenght === 0) {
        res.status(400).send({ 
            responseMessage: 'Istnieje już faktura o tym numerze. Zamówienie nie zostało dodane.',
            success: false
        });
    };

    // const order = new Order({
    //     date,
    //     orderNo,
    //     product: product[0],
    //     amount,
    //     invoice: {
    //         firstName,
    //         lastName,
    //         street,
    //         buildingNumber,
    //         flatNumber,
    //         zipCode,
    //         city,
    //         items,
    //         deliveryCost
    //     }
    // });

    // const invoicePdf = createInvoicePdf(orderNo, date, firstName, lastName, street, buildingNumber, flatNumber, zipCode, city, items[0], amount, deliveryCost);
        
    // const orderNoFirstReplace = orderNo.replace('/', '')
    // const orderNoSecondReplace = orderNoFirstReplace.replace('/', '')

    // invoicePdf.pipe(fs.createWriteStream(`pdf/invoices/Faktura${orderNoSecondReplace}.pdf`));
    // invoicePdf.end();

    // order.save((err) => {
    //     if (err) res.status(400).send({ 
    //         responseMessage: 'Wystąpił błąd. Zamówienie nie zostało dodane.',
    //         success: false
    //     });
    //     else return res.status(200).send({ 
    //         responseMessage: 'Dodano zamówienie', 
    //         success: true
    //     }); 
    // });
});

router.get('/:orderno', async (req, res) => {
    const orderNo = req.params.orderno;

    res.download(path.resolve(`pdf/invoices/Faktura${orderNo}.pdf`));
});

router.get('/sendinvoice/:orderno', async (req, res) => {
    const orderNo = req.params.orderno;
    const validOrderNo = orderNo.slice(0, 2) + '/' + orderNo.slice(2, 4) + '/' + orderNo.slice(4)

    const order = await Order.find({ orderNo: validOrderNo });
  
    if (order) sendInvoice(order[0]);
})

module.exports = router;