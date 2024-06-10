// ES6의 모듈 형식-> .mjs 확장자
// import 를 사용해서 가져옴
// 실행시 확장자 적어야함
// 프로젝트로 es6 작성할때는 package.json 에 "type:""module"적어야함
const add = (a,b) =>{
    return a+b;
}

// export default 키워드 사용
export default add;
