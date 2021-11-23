const router = require('express').Router();
const { contactValidation } = require('../validation/contactValidation');
const { sendContactEmail } = require('../nodemailer/contact');

router.post('/', async (req, res) => {
    try {
        const { error } = contactValidation(req.body);

        if (error) {
            const message = error.details[0].message;
            return res.status(400).send({ message });
        } else {
            sendContactEmail(req.body.email, req.body.message);
            const message = 'Wysłano wiadomość!';
            return res.status(200).send({ message });
        }
    } catch {
        const message = 'Server Error';
        res.status(500).send({ message });
    }
})

module.exports = router;