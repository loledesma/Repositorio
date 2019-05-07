const express = require('express');
const morgan = require('morgan');
const ig = require('instagram-node');
const engine = require('ejs-mate');
const path = require('path');
var bodyParser = require('body-parser');
const mongoose = require('mongoose');
const data = require('./models/data');


mongoose.connect('mongodb://localhost/BigData', { useNewUrlParser: true } , function(error, BigData){
    if (error) {
        throw error;
    }else{
        db = BigData;
        console.log('conectando a mongodb')
    }
});

const app = express();

app.use(require('./routes/index'));

//settings
app.engine('ejs',engine);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//peticiones de usuario

app.use(morgan('dev'));

//routes



//empezar el servidor
app.listen(3000);
console.log('escuchando en el puerto 3000');
