import './App.css';

function App() {
  const name = '희망이'
  const animal = '고양이'

  let a = 8;
  let b = 5;

  const title = 'Hello World'


  return (
    <div className="App">
      <h2>우리 아파트 길냥이 이름은 {name}입니다.</h2>
      <h2>{name}는 {animal}입니다</h2>
      <h3>3+5 == 8 ?{3+5 == 8? '정답입니다' : '오답입니다'}</h3>
      {
        a > b &&
        <div>a가 b보다 큽니다</div>
      }

      <div className='practice-form'>
        <h4>{title}</h4>
        <form>
          <div>
            <label htmlFor='id'>아이디 : </label>
            <input type='text' id='id' name='id'/>
          </div>
          <div>
            <label htmlFor='pw'>비밀번호 : </label>
            <input type='password' id='pw' name='pw'/>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
