const router = require('express').Router();
const mongoose = require('mongoose');
const path = require('path');
const crypto = require('crypto');
const multer = require('multer');
const { GridFsStorage } = require('multer-gridfs-storage');
const Grid = require('gridfs-stream');
const dotenv = require('dotenv');
dotenv.config({ path: './.env' });
const Product = require('../models/product');
const { addProductValidation } = require('../validation/addProductValidation');

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

const storage = new GridFsStorage({
  url: DB_CONNECT,
  file: (req, file) => {
    return new Promise((resolve, reject) => {
      crypto.randomBytes(16, (err, buf) => {
        if (err) {
          return reject(err);
        }
        const filename = buf.toString('hex') + path.extname(file.originalname);
        const fileInfo = {
          filename: filename,
          bucketName: 'images'
        };
        resolve(fileInfo);
      });
    });
  }
});
const upload = multer({ storage });

router.post('/add', upload.any('image'), async (req, res) => {
        const { error } = addProductValidation(req.body);
        
        if (error) {
            const message = error.details[0].message;
            return res.status(400).send({ message });
        }

        const { name, category, price, description, height, width, materials, care, promotion, promotionSize, quantity } = req.body;

        const nameExist = await Product.find({ name });
        if (nameExist.length !== 0) return res.status(400).send({ message: 'Istnieje już produkt o podanej nazwie.'});
      
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
            if (err) res.status(400).send({ message: 'Wystąpił błąd. Produkt nie został dodany.'});
            else return res.status(200).send({ message: 'Dodano produkt', clear: true});
        });
});

router.delete('/delete/:id', (req, res) => {
  const id = req.params.id;

  Product.deleteOne({ _id: id }, (err) => {
    if (err) {
      return res.status(400).send({ message: 'Wystąpił błąd. Produkt nie został usunięty.'});
    }
    else {
      return res.status(200);
    }
  });
})

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
        const product = await Product.find({ name });
        res.status(200).send(product[0]);

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