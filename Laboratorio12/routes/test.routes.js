const express = require('express');
const path    = require('path');
const fs      = require('fs');
const router = express.Router();

router.get('/test_ejs', (request, response, next) => {
    let frases = []
    frases.push("Frase 1");
    frases.push("Frase 2");
    frases.push("Frase 3");
    frases.push("Frase 4");
    frases.push("Frase 5");

    response.render('test',{
        frases: frases
    }); 
});

module.exports = router;