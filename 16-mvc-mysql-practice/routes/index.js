const express = require('express')
const controller = require('../controller/Cuser')
const router = express.Router();

router.get('/', controller.main)

// get -> /user/signup
// 회원가입 페이지 보여주기
router.get('/user/signup', controller.getSignUp) 

// post -> /user/signup
// 새로운 회원 생성
router.post('/user/signup', controller.postSignUp)

// get -> /user/signin
// 로그인 페이지 보여주기
router.get('/user/signin', controller.getSignIn)

// post -> /user/signin
// 로그인 회원 조회
router.post('/user/signin', controller.postSignIn)

// post -> /user/profile
// 로그인 성공 시 회원 정보 수정 페이지 접속
router.post('/user/profile', controller.postProfile)

// patch -> /user/profile/edit
// 회원 정보 수정
router.patch('/user/profile/edit', controller.patchProfile)

// delete -> /user/profile/delete
// 회원 삭제
router.delete('/user/profile/delete', controller.deleteUser)






module.exports = router;