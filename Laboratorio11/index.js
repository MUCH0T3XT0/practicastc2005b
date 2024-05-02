
const http = require('http');
const path = require('path');
const fs   = require('fs');


const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));

app.use((request, response, next) => {
    console.log('Middleware!');
    next();
});
app.get("/", (request, response, next) => {
    response.setHeader('Content-Type', 'text/plain');
    response.write("URL index/");
    response.end();
});
app.get("/laboratorio3", (request, response, next) => {
    response.setHeader('Content-Type', 'text/html');
    const lab3 = fs.readFileSync(path.resolve(__dirname, '../Laboratorio3/Laboratorio3.html'), 'utf8');
    response.write(lab3);
    response.end();
});
app.get("/laboratorio6", (request, response, next) => {
    response.setHeader('Content-Type', 'text/html');
    const lab6 = fs.readFileSync(path.resolve(__dirname, '../Laboratorio6/Lab6_2.html'), 'utf8');
    response.write(lab6);
    response.end();
});

const rutasFormulario = require('./routes/formulario.routes');
app.use('/formulario', rutasFormulario);


app.use((request, response, next) => {
    response.status(404);
    response.send('¡Page Not Found!');
});

const server = http.createServer( (request, response) => {    
    console.log(request.url);
});
app.listen(3000);