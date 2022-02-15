const router = require('express').Router();
const mongoose = require('mongoose');
const Grid = require('gridfs-stream');
const dotenv = require('dotenv');
dotenv.config({ path: './.env' });
const Hero = require('../models/hero');
const { upload } = require('../middleware/multer'); 

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

router.post('/add', upload.any('image'), async (req, res) => {
    const { name, link } = req.body;
    const image = req.files[0].filename;

    const hero = new Hero({
        name,
        image,
        link
    })

    hero.save((err) => {
        if (err) res.status(400).send({ 
            responseMessage: 'Wystąpił błąd. Zdjęcie główne nie zostało dodane.',
            success: false
        });
        else return res.status(200).send({ 
            responseMessage: 'Dodano zdjęcie główne', 
            success: true
        });
    });
});

router.delete('/delete/:id', (req, res) => {
    const id = req.params.id;

    Hero.deleteOne({ _id: id }, (err) => {
        if (err) {
            return res.status(400).send({ 
                responseMessage: 'Wystąpił błąd. Obraz nie został usunięty.',
                success: false
            });
        }
        else {
            return res.status(200);
        }
    });
});

router.put('/edit/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const updateHero = req.body;

        const hero = await Hero.findOne({ _id: id });

        Object.keys(hero.toJSON()).forEach(key => {
            if (updateHero[key]) {
                if (hero[key] !== updateHero[key]) {
                    hero[key] = updateHero[key];
                }
            } 
        });

        await hero.save();

        res.status(200).send({message: 'Zaktualizowano obraz.'})
    } catch(err) {
        res.status(400).send({message: 'Wystąpił błąd. Obraz nie został zaktualizowany.'});
    }
})

router.get('/', async (req, res) => {
    try {
        const allImages = await Hero.find({ });
        return res.status(200).send(allImages);
     
    } catch(err) {
        return res.status(400).send({message: 'Wystąpił błąd. Obrazy nie zostały znalezione.'});
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

module.exports = router;