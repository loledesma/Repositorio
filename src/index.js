const express = require('express');
const morgan = require('morgan');
const ig = require('instagram-node');
const engine = require('ejs-mate');
const path = require('path');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/BigData', { useNewUrlParser: true } , function(error){
    if (error) {
        throw error;
    }else{
        console.log('conectando a mongodb')
    }
});


const app = express();

//settings
app.engine('ejs',engine);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//peticiones de usuario

app.use(morgan('dev'));

//routes

app.use(require('./routes/index'));

//empezar el servidor
app.listen(3000);
console.log('escuchando en el puerto 3000');
