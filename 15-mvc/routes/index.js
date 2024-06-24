const express = require('express')
const controller = require('../controller/Cmain')
const router = express.Router();

router.get('/', controller.getMain);

router.get('/comments', controller.getComments)

// 동적 라우팅
// /:id 요청의 주소에서 '변수'를 사용하는 방법 (:) id 는 내가 지은 변수 이름
router.get('/comment/:id', controller.getComment)

// 파일 내보내기
module.exports = router;