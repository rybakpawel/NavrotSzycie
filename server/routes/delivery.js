const router = require('express').Router();
const fetch = require('node-fetch');
const deliveryValidation = require('../validation/deliveryValidation');

let dane;

router.post('/', async (req, res) => {
    try {
        const { error } = deliveryValidation(req.body);
        dane = req.body;

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

// router.get('/', async (req,res) => {
//     try {
//         const apiResponse = await fetch('https://api-shipx-pl.easypack24.net/v1/shipments/123', {
//             method: 'GET',
//             headers: {
//                 'Content-Type': 'application/json',
//                 'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJpc3MiOiJhcGktc2hpcHgtcGwuZWFzeXBhY2syNC5uZXQiLCJzdWIiOiJhcGktc2hpcHgtcGwuZWFzeXBhY2syNC5uZXQiLCJleHAiOjE2MzYwMjI0OTAsImlhdCI6MTYzNjAyMjQ5MCwianRpIjoiOWE3OWQwYzEtYTVhMC00NjQ4LWJmZWYtYzUxMjcyNjAzZDU0In0.FZ0oKWAY2WtHWJ0L-D8OlLXBcEVIn12_O1YnpvMrasKGkg68pbnWq2ZZipwA3aZQBk4cS3r0ZxOX-Jh3onhk_A'
//             }
//         });
//         const api = await apiResponse.json();

//         res.send(api);
     
//     } catch(err) {
//         console.log('blad')
//     }
// });

module.exports = router;