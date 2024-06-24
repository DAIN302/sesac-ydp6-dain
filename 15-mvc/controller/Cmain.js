const { getDbComments } = require('../model/Comment')

// 내보냄과 동시에 함수 정의
exports.getMain = (req, res) => {
    res.render('index');
}

exports.getComments = (req, res)=>{
    res.render('comments', { comments :  getDbComments() }) // comments : comments
}

exports.getComment = (req, res)=>{
    // console.log(req.params); // { id: '1' }
    // console.log(req.params.id); 1 -> 요청에 대한 변수값을 id로 설정했기 때문에 params.id로 값을 받을 수 있는 것

    // 댓글 id : 요청 주소로 들어온 매개변수(:id)
    const conmmentID = req.params.id
    const dbComments = getDbComments();
    // console.log(comments[conmmentID - 1]); comment 배열 인덱스값에 따라 불러오기

    // 존재하지 않는 id에 대해 요청 시 404처리
    if(!dbComments[conmmentID - 1]) { // 존재하지 않음? -> undefined 만약에 undefined 라면 404처리
        return res.render('404') 
    } 
    
    res.render('comment', {comment : dbComments[conmmentID -1]})   
}

