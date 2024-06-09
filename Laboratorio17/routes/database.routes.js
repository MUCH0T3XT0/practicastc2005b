
const express = require('express');
const path    = require('path');
const fs      = require('fs');
const router = express.Router();
const controller = require("../controllers/database.controller.js")
              
router.get('/test_db', controller.test_db);
router.get('/insert_books', controller.insert_books);
router.get('/update_books', controller.update_books);

router.post('/insert_books', controller.post_insert_books);
router.post('/update_books', controller.post_update_books);

module.exports = router;