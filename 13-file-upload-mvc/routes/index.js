const express = require('express')
const controller = require('../controller/Cfile')
const { dynamicFile } = require('../middlewares/upload-middleware')
const router = express.Router();

router.get('/', controller.getMain)

// dynamic
router.post('/dynamicFile', dynamicFile, controller.postDynamicFile)


module.exports = router;