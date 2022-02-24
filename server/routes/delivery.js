const router = require('express').Router();
const deliveryValidation = require('../validation/deliveryValidation');

router.post('/', async (req, res) => {
    try {
        const { error } = deliveryValidation(req.body);

        if (error) {
            const message = error.details[0].message;
            return res.status(400).send({ message });
        } else {
            return res.status(200).send({message: 'Success'});
        }

    } catch {
        const message = 'Server Error';
        res.status(500).send({ message });
    }
})

module.exports = router;