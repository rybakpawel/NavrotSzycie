const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

const product = require('./routes/product');
const contact = require('./routes/contact');
const delivery = require('./routes/delivery');

dotenv.config();
const PORT = process.env.PORT;
const DB_CONNECT = process.env.DB_CONNECT;


const app = express();

app.listen(PORT, () => {
    console.log('Server is listening!');
});

mongoose.connect(DB_CONNECT, 
    { 
        useUnifiedTopology: true, 
        useNewUrlParser: true 
    }, 
    () => console.log('Connected with mongoose')
);

app.use(express.json());
app.use(express.urlencoded({ extended: false }))
// app.use(cors({
//     origin: 'http://localhost:3000'
// }));
app.use(cors());

app.use('/products', product)
app.use('/contact', contact);
app.use('/delivery', delivery);
