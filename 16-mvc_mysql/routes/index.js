const express = require('express')
const controller = require('../controller/Cvisitor')
const router = express.Router()

// 작업 순서 
// read all -> create -> delete -> update

router.get('/', controller.main)

router.get('/visitors', controller.getVisitors) // 전체 조회

// post /visitor 
router.post('/visitor', controller.postVisitor) // 하나 추가

// delete /visitor
router.delete('/visitor', controller.deleteVisitor); // 하나 삭제

module.exports = router;