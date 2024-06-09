const http    = require('http');
const express = require('express');
const path    = require('path');
const fs      = require('fs');
const app     = express();

const session = require('express-session');
app.use(session({
  secret: 'mi string secreto que debe ser un string aleatorio muy largo, no como éste', 
  resave: false, //La sesión no se guardará en cada petición, sino sólo se guardará si algo cambió 
  saveUninitialized: false, //Asegura que no se guarde una sesión para una petición que no lo necesita
}));


app.set('view engine', 'ejs');
app.set('views', 'views');

const bodyParser = require('body-parser');

const cookieParser = require('cookie-parser');
app.use(cookieParser());

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (request, response, next) => {
    response.setHeader('Content-Type', 'text/html');
    //Se agrega la cookie
    response.render('index');
    response.end; 
});

const rutasUsuarios = require('./routes/usuarios.routes');
app.use('/usuarios', rutasUsuarios);

const rutasLaboratorio = require('./routes/laboratorio.routes');
app.use('/laboratorios', rutasLaboratorio);

const rutasCookies = require('./routes/cookies.routes');
app.use('/cookies', rutasCookies);

const rutasBaseDeDatos = require('./routes/database.routes');
app.use('/database', rutasBaseDeDatos);

app.use((request, response, next) => {
    response.status(404);
    response.send('¡Page Not Found!');
});

const server = http.createServer( (request, response) => {    
    console.log(request.url);
});
app.listen(3000);