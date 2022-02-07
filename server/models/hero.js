const mongoose = require('mongoose');

const heroSchema = new mongoose.Schema({
    name: String,
    image: String,
    link: String,
}, { collection: 'hero' });

module.exports = mongoose.model('Hero', heroSchema);