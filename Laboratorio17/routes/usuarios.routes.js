const express = require('express');
const path    = require('path');
const fs      = require('fs');
const router = express.Router();

const controller = require("../controllers/usuarios.controller.js");
const aController = require('../controllers/a_controller.js');

router.get('/add-product', aController.action);
router.get('/obtener_usuarios', controller.index);

module.exports = router;