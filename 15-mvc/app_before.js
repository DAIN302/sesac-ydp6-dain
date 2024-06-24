// express 모듈 등록
const express = require('express')
const app = express();
const PORT = 8000;

// 뷰 템플릿
app.set('view engine', 'ejs');
app.set('views', './views'); 

// 댓글 정보 배열 (임시로 DB에서 가져온 데이터로 가정)
const comments = [
    {
      id: 1,
      userid: 'helloworld',
      date: '2022-10-31',
      comment: '안녕하세요^~^',
    },
    {
      id: 2,
      userid: 'happy',
      date: '2022-11-01',
      comment: '반가워유',
    },
    {
      id: 3,
      userid: 'lucky',
      date: '2022-11-02',
      comment: '오 신기하군',
    },
    {
      id: 4,
      userid: 'bestpart',
      date: '2022-11-02',
      comment: '첫 댓글입니당ㅎㅎ',
    },
];

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/comments', (req, res)=>{
    res.render('comments',{ comments }) // comments : comments
})

// 동적 라우팅
// /:id 요청의 주소에서 '변수'를 사용하는 방법 (:) id 는 내가 지은 변수 이름
app.get('/comment/:id', (req, res)=>{
    // console.log(req.params); // { id: '1' }
    // console.log(req.params.id); 1 -> 요청에 대한 변수값을 id로 설정했기 때문에 params.id로 값을 받을 수 있는 것

    // 댓글 id : 요청 주소로 들어온 매개변수(:id)
    const conmmentID = Number(req.params.id)
    // console.log(comments[conmmentID - 1]); comment 배열 인덱스값에 따라 불러오기

    // 존재하지 않는 id에 대해 요청 시 404처리
    if(!comments[conmmentID - 1]) { // 존재하지 않음? -> undefined 만약에 undefined 라면 404처리
        return res.render('404') 
    } 
    
    res.render('comment', {comment : comments[conmmentID -1]})
    
})

// 동적라우팅 
// 요청의 주소에 변수 여러개 사용 예시
app.get('/test/:id/:name', (req, res)=>{
    res.send(req.params)
    /*
        id: "2",
        name: "apple"
    */
})

// 잘못된 요청에 대한 처리 404 -> 맨 마지막 라우트(주소)로 선언해야함 안그러면 나머지 라우팅이 전부 무시됨
// * 때문에 맨 위로 올리면 모든 요청에 대해 이거로 처리함 
// 가장 마지막으로 해야 위에 설정된 라우팅을 제외하고 처리함
app.get('*', (req,res)=>{
    res.render('404')
})

app.listen(PORT, ()=> {
    console.log(`http://localhost:${PORT}`);
});