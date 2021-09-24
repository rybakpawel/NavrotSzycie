const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: String,
    category: String,
    price: Number,
    description: String,
    height: Number,
    width: Number,
    materials: String,
    care: String,
    promotion: Boolean,
    promotionSize: Number,
    addDate: Date,
}, { collection: 'products' });

module.exports = mongoose.model('Product', productSchema);