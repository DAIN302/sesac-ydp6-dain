const express = require('express');
const controller = require('../controller/Cuser');
const router = express.Router();

router.get('/', controller.main);

// 회원가입 페이지 가기
router.get('/register', controller.getRegister)

// 회원가입 정보 저장 후 로그인 페이지
router.post('/login', controller.postRegister)

// 로그인 페이지 가기
router.get('/login', controller.getLogin)

// 로그인 후 인덱스 페이지
router.post('/', controller.postLogin)


module.exports = router;