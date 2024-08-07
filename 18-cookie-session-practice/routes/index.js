const express = require('express')
const controller = require('../controller/Cuser')
const router = express.Router();

router.get('/', controller.main)

router.post('/login', controller.postLogin)

router.get('/login', controller.getLogin)

router.get('/logout', controller.getLogout)

module.exports = router;