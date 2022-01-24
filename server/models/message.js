const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
    email: String,
    message: String,
}, { collection: 'messages' });

module.exports = mongoose.model('Message', messageSchema);