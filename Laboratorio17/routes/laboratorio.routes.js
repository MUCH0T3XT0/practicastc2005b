const express = require('express');
const path    = require('path');
const fs      = require('fs');
const router = express.Router();


router.get("/Laboratorio6", (request, response, next) => {
    response.setHeader('Content-Type', 'text/html');
    response.render('./laboratorios/lab6');
    response.end();  
});
router.get("/Laboratorio3", (request, response, next) => {
    response.setHeader('Content-Type', 'text/html');
    response.render('./laboratorios/lab3');
    response.end();  
});

module.exports = router;