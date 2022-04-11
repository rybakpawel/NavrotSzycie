const router = require('express').Router();
const Promotion = require('../models/promotion');

router.post('/', async (req,res) => {
    try {
        const { promotionCode } = req.body;
    
        const promotion = await Promotion.findOne({ code: promotionCode.toLowerCase() } );
        
        if (promotion.active) {
            res.status(200).send({
                discount: promotion.discount
            });
        } else {
            res.status(200).send({
                discount: 0
            });
        }
     
    } catch(err) {
        res.status(500).send({
            discount: 0
        });
    }
});

router.get('/all', async (req, res) => {
    try {
        const promotions = await Promotion.find({});

        res.status(200).send(promotions);
    } catch {
        res.status(500).send('Nie znaleziono promocji.');
    }
});

router.post('/add', async (req, res) => {
    const { name, code, discount, active } = req.body;

    const promotion = new Promotion({
        name,
        code: code.toLowerCase(),
        discount,
        active
    })

    promotion.save((err) => {
        if (err) res.status(400).send({ 
            responseMessage: 'Wystąpił błąd. Promocja nie została dodana.',
            success: false
        });
        else return res.status(200).send({ 
            responseMessage: 'Dodano promocję', 
            success: true
        }); 
    });
});

router.put('/edit/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const updatePromotion = req.body;

        updatePromotion.code = updatePromotion.code.toLowerCase();

        const promotion = await Promotion.findOne({ _id: id });

        Object.keys(promotion.toJSON()).forEach(key => {
            if (updatePromotion.active === false) promotion.active = false
            if (updatePromotion[key]) {
                if (promotion[key] !== updatePromotion[key]) {
                    promotion[key] = updatePromotion[key];
                }
            } 
        });

        await promotion.save();

        res.status(200).send({message: 'Zaktualizowano promocję.'})
    } catch(err) {
        res.status(400).send({message: 'Wystąpił błąd. Promocja nie została zaktualizowana.'});
    }
});

router.delete('/delete/:id', (req, res) => {
    const id = req.params.id;

    Promotion.deleteOne({ _id: id }, (err) => {
        if (err) {
            return res.status(400).send({ 
                responseMessage: 'Wystąpił błąd. Promocja nie została usunięta.',
                success: false
            });
        }
        else {
            return res.status(200).send({ 
                responseMessage: 'Promocja została usunięta.',
                success: true
            });;
        }
    });
});

module.exports = router;