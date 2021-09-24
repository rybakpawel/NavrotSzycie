const router = require('express').Router();
const Product = require('../models/product');

router.get('/:category/:name', async (req,res)=>{
    const name = req.params.name;
 
    try{
        const product = await Product.find({ name });
        res.send(product);
    }catch(err){
        res.send({ 
            product: router.product,
         });
    }
});

module.exports = router;