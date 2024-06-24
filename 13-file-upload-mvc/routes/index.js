const express = require('express')
const controller = require('../controller/Cfile')
const {uploadDetail} = require('../middlewares/upload-middleware')
const router = express.Router();

router.get('/', controller.getMain)

// single
router.post('/upload', controller.postUploadSingle)

// array
router.post('/upload/array', controller.postUploadArray)

// fields
router.post('/upload/fields', controller.postUploadFields)

// dynamic
router.post('/dynamicFile', controller.postDynamicFile)

module.exports = router;