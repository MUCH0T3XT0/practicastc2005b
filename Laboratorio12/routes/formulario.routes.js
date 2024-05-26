const express = require('express');
const path    = require('path');
const fs      = require('fs');
const router = express.Router();


router.get("/form_method", (request, response, next) => {
    response.setHeader('Content-Type', 'text/html');
    const html = fs.readFileSync(path.resolve(__dirname, './../views/form.ejs'), 'utf8');
    response.write(html);
    response.end();  
});
router.post("/form_method", (request, response, next) => {

    const fecha = request.body.fecha;
    const nombre = request.body.nombre;
    const numero = request.body.numero;
    
    const data = `Fecha: ${fecha}\nNombre: ${nombre}\nNumero: ${numero}\n`;
    fs.appendFileSync('fecha_citas.txt', data);
    console.log("Datos guardados en el archivo.");

    console.log("Fecha: " + fecha);
    console.log("Nombre: " + nombre);
    console.log("Numero: " + numero);

    response.setHeader('Content-Type', 'application/json');
    response.statusCode = 200;
    response.write('{code:200, msg:"Ok POST"}');
    response.end();
});

module.exports = router;