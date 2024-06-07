const http    = require('http');
const express = require('express');
const path    = require('path');
const fs      = require('fs');
const app     = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (request, response, next) => {
    response.setHeader('Content-Type', 'text/html');
    response.render('index');
    response.end; 
});

const rutasUsuarios = require('./routes/usuarios.routes');
app.use('/usuarios', rutasUsuarios);

const rutasLaboratorio = require('./routes/laboratorio.routes');
app.use('/laboratorios', rutasLaboratorio);

app.use((request, response, next) => {
    response.status(404);
    response.send('¡Page Not Found!');
});

const server = http.createServer( (request, response) => {    
    console.log(request.url);
});
app.listen(3000);