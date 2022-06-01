const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    date: String,
    orderNo: String,
    product: [String],
    amount: Number,
}, { collection: 'orders' });

module.exports = mongoose.model('Order', orderSchema);