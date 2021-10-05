const router = require('express').Router();
const Product = require('../models/product');

router.get('/products', async (req,res) => {
    try {
        const allProducts = await Product.find({ });
        res.send(allProducts);
     
    } catch(err) {
        console.log('blad')
    }
});

router.get('/categories', async (req,res) => {
    try {
        const allCategories = await Product.distinct('category');
        res.send(allCategories);
     
    } catch(err) {
        console.log('blad')
    }
});

module.exports = router;

router.get('/:category/:name', async (req,res) => {
    const name = req.params.name;
 
    try {
        const product = await Product.find({ name });
        res.send(product);

    } catch(err) {
            console.log('blad')
    }
});

router.get('/:category', async (req,res) => {
    const category = req.params.category;
 
    try {
        const categoryProducts = await Product.find({ category });
        res.send(categoryProducts);

    } catch(err) {
        console.log('blad')
    }
});