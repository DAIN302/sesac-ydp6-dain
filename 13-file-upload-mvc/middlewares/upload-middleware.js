const multer = require('multer')
const path = require('path')

exports.uploadDetail = multer({
    storage : multer.diskStorage({ // 저장할 공간에 대한 정보 diskStorage -> 디스크에 저장하겠다고 설정
        destination(req, file, done){ // 저장할 경로 설정
            done(null, 'uploads/') // 파일을 저장할 경로
        },
        filename(req, file, done){ // 디스크에 저장될 파일명 설정
            const ext = path.extname(file.originalname); // path.extname()-> 확장자만 추출
            // 저장할 파일명
            done(null, path.basename(file.originalname, ext) + Date.now() + ext) // 파일명 + 업로드한 시간 + 확장자
        }
        // (req, file, done) -> req 요청 객체 / file -> req.file / done -> 끝났당
    }),
    limits : {fileSize : 5*1024*1024} // 업로드 크기 제한
})