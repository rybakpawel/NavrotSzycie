const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: String,
    category: String,
    price: Number,
    priceWithPromotion: Number,
    images: [String],
    description: String,
    height: Number,
    width: Number,
    circuit: Number,
    depth: Number,
    materials: String,
    care: String,
    promotion: Boolean,
    promotionSize: Number,
    quantity: Number,
    addDate: {
        type: Date,
        default: Date.now
    }
}, { collection: 'products' });

module.exports = mongoose.model('Product', productSchema);