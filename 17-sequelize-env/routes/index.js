const express = require('express');
const controller = require('../controller/Cmain');
const router = express.Router();

router.get('/', controller.index);

module.exports = router;

