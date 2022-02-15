const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config({ path: './.env' });
const User = require('../models/user');
const auth = require('../middleware/auth');
const authValidation = require('../validation/authValidation');

router.get('/', auth, async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select('-password');
        
        if (!user) throw Error('Użytkownik nie istnieje');
        
        res.status(200).json(user);
    } catch (e) {
        res.status(400).json({ msg: e.message });
    }
});

router.post('/auth', async (req, res) => {
    try {
        const { error } = authValidation(req.body);
        if (error) return res.status(400).send({ message: error.details[0].message });
    
        const { email, password } = req.body;
     
        const user = await User.findOne({ email })
        if (!user) return res.status(400).send({ message: 'Nie ma użytkownika o podanym emailu.'});

        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) res.status(400).send({ message: 'Nieprawidłowe hasło'});
      
        const token = jwt.sign(
            { id: user._id }, 
            process.env.JWT_SECRET,
            { expiresIn: 3600 }
        );

        res.status(200).send({
            token,
            user: {
                id: user._id,
                name: user.name,
                email: user.email
            }
        });
    } catch {
        res.status(400).send({ message: 'Wystąpił nieznany błąd'});
    } 
});

// router.get('/reg', async (req, res) => {
//     const salt = await bcrypt.genSalt(10);
//     const hashedPassword = await bcrypt.hash('numerek123', salt);

//     const user = new User({
//         name: 'Patrycja',
//         email: 'navrot.szycie@gmail.com',
//         password: hashedPassword,
//     });
//     await user.save()
//         .then(user => {
//             jwt.sign(
//                 { id: user.id },
//                 JWT_SECRET,
//                 { expiresIn: 3600 },
//                 (err, token) => {
//                     if (err) console.log('blad')
//                     res.json({
//                         token,
//                         user: {
//                             id: user.id,
//                             name: user.name,
//                             email: user.email
//                         }
//                     })
//                 }
//             )
//         }) 
// })

module.exports = router;