const router = require('express').Router();
const contactValidation = require('../validation/contactValidation');
const sendContactEmail = require('../nodemailer/contact');
const Message = require('../models/message');

router.post('/', async (req, res) => {
    try {
        console.log(req.body)
        const { error } = contactValidation(req.body);

        if (error) {
            const responseMessage = error.details[0].message;
            return res.status(400).send({ 
                responseMessage,
                success: false
            });
        } else {
            sendContactEmail(req.body.email, req.body.message);
            
            const message = new Message({
                email: req.body.email,
                message: req.body.message
            });

            message.save((err) => {
                if (err) return res.status(400).send({ 
                    responseMessage: 'Wystąpił błąd. Wiadomość nie została zapisana.',
                    success: false
                });
            });

            return res.status(200).send({ 
                responseMessage: 'Wysłano wiadomość!',
                success: true 
            });
        }
    } catch {
        res.status(500).send({ 
            responseMessage: 'Server Error',
            success: false 
        });
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