const router = require('express').Router();
const Promotion = require('../models/promotion');

router.post('/', async (req,res) => {
    try {
        const { promotionCode } = req.body;
    
        const promotion = await Promotion.findOne({ code: promotionCode });
        
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

module.exports = router;