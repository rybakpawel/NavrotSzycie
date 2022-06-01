const router = require('express').Router();
const path = require('path');
const fs = require('fs');
const Hero = require('../models/hero');
const { upload } = require('../middleware/multer');

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

router.delete('/delete/:id', async (req, res) => {
    const id = req.params.id;

    const hero = await Hero.findOne({ _id: id });

    fs.unlink(path.join(__dirname, `../uploads/${hero.image}`), (err) => {
        if (err) console.log(err)
    });

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

    const options = {
        root: path.join(__dirname, '../uploads')
    };
    
    res.sendFile(filename, options, (err) => {
        if (err) console.log('Nie wysłano pliku.')
    })
});

module.exports = router;