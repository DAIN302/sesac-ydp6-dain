exports.getMain = (req, res) => {
    res.render('index', {title : '파일 업로드 실습'})
}

exports.postUploadSingle = (req, res) => {
    res.render('uploaded', {title : req.body.title, src: req.file.path})
}

exports.postUploadArray = (req, res) => {
    console.log(req.body);
    console.log(req.files); // 여러개의 파일이라 files에 담김
    // {apple: [{}], banana : [{}]} 객체 형태로 파일 정보 저장
    res.send('여러개의 파일 업로드 성공2')
}

exports.postUploadFields = (req, res) => {
    console.log(req.body);
    console.log(req.files); // 여러개의 파일이라 files에 담김
    // {apple: [{}], banana : [{}]} 객체 형태로 파일 정보 저장
    res.send('여러개의 파일 업로드 성공2')
}

exports.postDynamicFile = (req, res) => {
    res.send({file : req.file, body : req.body})
}
