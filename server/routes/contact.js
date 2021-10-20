const router = require('express').Router();
const { sendContactEmail } = require('../nodemailer/contact');

let message;

router.post('/contact', async (req, res) => {
    try {
        sendContactEmail(req.body.email, req.body.message);
        message = 'Wysłano wiadomość!';
        res.redirect('http://localhost:3000/contact');

    } catch {
        message = 'Nie udało się wysłać wiadomości.';
    }
})

router.get('/contact', (req, res) => {
    res.send(message);
})

module.exports = router