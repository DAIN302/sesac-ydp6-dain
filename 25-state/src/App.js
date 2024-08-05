import './App.css';
import Counter from './Counter';
import CounterFunction from './CounterFunction';
import CounterPractice from './CounterPractice';
import CounterPractice2 from './CounterPractice2';
import SayFunction from './SayFunction';

function App() {
  return (
    <div className="App">
      <Counter />
      <hr/>
      <SayFunction />
      <hr/>
      <CounterFunction value={"Plus 1"}/>
      <hr />
      <CounterPractice />
      <hr />
      <CounterPractice2 />
    </div>
  );
}

export default App;
