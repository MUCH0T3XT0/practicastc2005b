
const express = require('express');
const path    = require('path');
const fs      = require('fs');
const router = express.Router();

router.get('/test_cookie', (request, response, next) => {
    response.setHeader('Content-Type', 'text/plain');

    response.setHeader('Set-Cookie', 'mi_cookie=123; HttpOnly');
    response.send(request.cookies.mi_cookie);
    response.end(); 
});

router.get('/test_session', (request, response, next) => {
    request.session.mi_variable = "valor"
    response.setHeader('Content-Type', 'text/plain');
    response.send(request.session.mi_variable);
    response.end(); 
});

router.get('/test_session_variable', (request, response, next) => {
    response.setHeader('Content-Type', 'text/plain');
    response.send(request.session.mi_variable);
    response.end(); 
});

router.get('/logout', (request, response, next) => {
    request.session.destroy(() => {
        response.redirect('/'); //Este código se ejecuta cuando la sesión se elimina.
    });
});

module.exports = router;