const express = require('express')
const controller = require('../controller/Cfile')
const { singleUpload, arrayUpload, fieldsUpload } = require('../middlewares/upload-middleware')
const router = express.Router();

// single
router.post('/',singleUpload, controller.postUploadSingle)

// array
router.post('/array', arrayUpload, controller.postUploadArray)

// fields
router.post('/fields', fieldsUpload, controller.postUploadFields)


module.exports = router;