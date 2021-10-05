const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

const home = require('./routes/home');
const product = require('./routes/product');

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

app.use(cors({
    origin: 'http://localhost:3000'
}));

app.use('/', product);