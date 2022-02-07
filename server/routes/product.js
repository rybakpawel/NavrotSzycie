const router = require('express').Router();
const mongoose = require('mongoose');
const multer = require('multer');
const Grid = require('gridfs-stream');
const dotenv = require('dotenv');
dotenv.config({ path: './.env' });
const Product = require('../models/product');
const { storage } = require('../utils/storage');
const { productValidation } = require('../validation/productValidation');

const DB_CONNECT = process.env.DB_CONNECT;
const conn = mongoose.createConnection(DB_CONNECT);

let gfsBucket;
let gfs;

conn.once('open', () => {
    gfs = Grid(conn.db, mongoose.mongo);

    gfsBucket = new mongoose.mongo.GridFSBucket(conn.db, {
        bucketName: 'images'
    });

    gfs.collection('images');
});

const upload = multer({ storage });

router.post('/add', upload.any('image'), async (req, res) => {
    const { error } = productValidation(req.body);
        
    if (error) {
        const message = error.details[0].message;
        return res.status(400).send({ 
            responseMessage: message,
            success: false
        });
    }

    const { name, category, price, description, height, width, materials, care, promotion, promotionSize, quantity } = req.body;

    const nameExist = await Product.find({ name });
    if (nameExist.length !== 0) return res.status(400).send({ 
        responseMessage: 'Istnieje już produkt o podanej nazwie.',
        success: false
    });
      
    const images = req.files.map((img) => {
        const { filename } = img;
        return filename;
    })

    const now = new Date();
    const product = new Product({
        name,
        category,
        price,
        priceWithPromotion: promotion ? price - promotionSize : price,
        images,
        description,
        height,
        width,
        materials,
        care,
        promotion,
        promotionSize: promotion ? promotionSize : 0,
        quantity,
        addDate: now.getDate()
    })

    product.save((err) => {
        if (err) res.status(400).send({ 
            responseMessage: 'Wystąpił błąd. Produkt nie został dodany.',
            success: false
        });
        else return res.status(200).send({ 
            responseMessage: 'Dodano produkt', 
            success: true
        });
    });
});

router.delete('/delete/:id', (req, res) => {
    const id = req.params.id;

  // gfs.remove({ _id: id, root: 'images' }, (err, gridStore) => {
  //   if (err) {
  //     return res.status(400).json({ message: 'Wystąpił błąd. Produkt nie został usunięty.'});
  //   }
  // });

    Product.deleteOne({ _id: id }, (err) => {
        if (err) {
            return res.status(400).send({ message: 'Wystąpił błąd. Produkt nie został usunięty.'});
        }
        else {
            return res.status(200);
        }
    });
});

router.put('/edit/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const updateProduct = req.body;

        const { error } = productValidation(req.body);
        
        if (error) {
            const message = error.details[0].message;
            return res.status(400).send({ message });
        }

        const product = await Product.findOne({ _id: id });

        Object.keys(product.toJSON()).forEach(key => {
            if (updateProduct[key] || key === 'promotion') {
                if (product[key] !== updateProduct[key]) {
                    product[key] = updateProduct[key];
                }
            }  
        });

        const { price, promotion, promotionSize } = updateProduct;

        product.priceWithPromotion = promotion ? price - promotionSize : price;
        product.promotionSize = promotion ? promotionSize : 0;

        await product.save();
    
        res.status(200).send({message: 'Zaktualizowano produkt.'});
    } catch(err) {
        res.status(400).send({message: 'Wystąpił błąd. Produkt nie został zaktualizowany.'});
    }
});

router.put('/edit/quantity/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const product = await Product.findOne({ _id: id });

        product.quantity--;

        await product.save();
    
        res.status(200).send({message: 'Zaktualizowano produkt.'});
    } catch(err) {
        res.status(400).send({message: 'Wystąpił błąd. Produkty nie został zaktualizowany.'});
    }
});

router.get('/all', async (req,res) => {
    try {
        const allProducts = await Product.find({ });
        res.status(200).send(allProducts);
     
    } catch(err) {
        res.status(400).send({message: 'Wystąpił błąd. Produkty nie zostały znalezione.'});
    }
});

router.get('/categories', async (req,res) => {
    try {
        const allCategories = await Product.distinct('category');
        res.status(200).send(allCategories);
     
    } catch(err) {
        res.status(400).send({message: 'Wystąpił błąd. Kategorie nie zostały znalezione.'});
    }
});

router.get('/new', async (req,res) => {
    try {
        const newProducts = await Product.find().sort({_id: -1}).limit(5);
        res.status(200).send(newProducts);
     
    } catch(err) {
        res.status(400).send({message: 'Wystąpił błąd. Nowe produkty nie zostały znalezione.'});
    }
});

router.get('/image/:filename', (req, res) => {
    const filename = req.params.filename;

    gfs.files.findOne({ filename }, (err, file) => {
        if (!file || file.length === 0) {
            return res.status(404).json({
                err: 'Plik nie istnieje'
            });
        }
    
        if (file.contentType === 'image/jpeg' || file.contentType === 'image/png') {
            const readStream = gfsBucket.openDownloadStream(file._id);
            readStream.pipe(res);
        } else {
            res.status(404).json({
                err: 'Plik nie jest obrazem'
            });
        }
    });
});

router.get('/:category/similar', async (req,res) => {
    const category = req.params.category;
 
    try {
        const similarProducts = await Product.find({ category }).limit(5);
        res.status(200).send(similarProducts);

    } catch(err) {
        res.status(400).send({message: 'Wystąpił błąd. Kategoria nie została znaleziona.'}); 
    }
});

router.get('/:category/:name', async (req,res) => {
    const name = req.params.name;
 
    try {
        const product = await Product.findOne({ name });
        res.status(200).send(product);

    } catch(err) {
        res.status(400).send({message: 'Wystąpił błąd. Produkt nie został znaleziony.'});
    }
});

router.get('/:category', async (req,res) => {
    const category = req.params.category;
 
    try {
        const categoryProducts = await Product.find({ category });
        res.status(200).send(categoryProducts);

    } catch(err) {
        res.status(400).send({message: 'Wystąpił błąd. Produkty nie zostały znalezione.'});
    }
});

module.exports = router;