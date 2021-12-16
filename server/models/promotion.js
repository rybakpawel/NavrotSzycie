const mongoose = require('mongoose');

const promotionSchema = new mongoose.Schema({
    name: String,
    code: String,
    discount: Number,
    active: Boolean,
}, { collection: 'promotions' });

module.exports = mongoose.model('Promotion', promotionSchema);