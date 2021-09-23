const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const home = require('./routes/home');

const PORT = process.env.PORT;
dotenv.config();

const app = express();

app.listen(process.env.PORT, () => {
    console.log('Server is listening!');
});

mongoose.connect(process.env.DB_CONNECT, 
    { 
        useUnifiedTopology: true, 
        useNewUrlParser: true 
    }, 
    () => console.log('Connected with mongoose'));

app.use('/', home)