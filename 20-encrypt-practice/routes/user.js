const express = require('express');
const controller = require('../controller/Cuser');
const router = express.Router();

router.get('/', controller.main);

// 회원가입 페이지 가기
router.get('/register', controller.getRegister)

// 회원가입 정보 저장 후 로그인 페이지
router.post('/register', controller.postRegister)

// 로그인 페이지 가기
router.get('/login', controller.getLogin)

// 로그인 후 인덱스 페이지
router.post('/', controller.postLogin)

// 프로필 페이지 이동
router.get('/profile', controller.getProfile)

// 회원정보 수정
router.patch('/profile/edit', controller.patchProfile)

// 회원 탈퇴
router.delete('/profile/delete', controller.deleteUser)

// 전체 회원 조회
router.get('/users', controller.getUsers)

// 로그아웃
router.get('/logout', controller.getLogout)


module.exports = router;