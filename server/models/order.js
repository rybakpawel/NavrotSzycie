const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    date: String,
    orderNo: String,
    product: [String],
    amount: Number,
    invoice: {
        firstName: String,
        lastName: String,
        street: String,
        buildingNumber: String,
        flatNumber: String,
        zipCode: String,
        city: String,
        items: [
            {
                name: String,
                price: Number,
                quantity: Number
            }
        ],
        deliveryCost: Number
    },
    
}, { collection: 'orders' });

module.exports = mongoose.model('Order', orderSchema);