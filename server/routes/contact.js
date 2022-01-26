const router = require('express').Router();
const { contactValidation } = require('../validation/contactValidation');
const { sendContactEmail } = require('../nodemailer/contact');
const Message = require('../models/message');

router.post('/', async (req, res) => {
    try {
        const { error } = contactValidation(req.body);

        if (error) {
            const responseMessage = error.details[0].message;
            return res.status(400).send({ responseMessage });
        } else {
            sendContactEmail(req.body.email, req.body.message);
            
            const message = new Message({
                email: req.body.email,
                message: req.body.message
            });

            message.save((err) => {
                if (err) res.status(400).send({ message: 'Wystąpił błąd. Wiadomość nie została zapisana.'});
                else return res.status(200).send({ message: 'Zapisano wiadomość', clear: true});
            });

            const responseMessage = 'Wysłano wiadomość!';
            return res.status(200).send({ responseMessage });
        }
    } catch {
        const responseMessage = 'Server Error';
        res.status(500).send({ responseMessage });
    }
})

router.get('/messages', async (req, res) => {
    try {
        const messages = await Message.find().sort({_id: -1});
        res.status(200).send(messages);
     
    } catch(err) {
        res.status(400).send({message: 'Wystąpił błąd. Wiadomości nie zostały znalezione.'});
    }
})

module.exports = router;