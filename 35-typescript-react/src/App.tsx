import React from 'react';
import Student from './components/Student';
import Card from './components/Card';
import TodoList from './components/TodoList';
import PostList from './components/PostList';

function App() {
  // #1. 
  const handleClick = (name:string, grade:number):void => {
    console.log(`안녕 나는 ${name}인데, ${grade}학년이다. `);
    
  }
  return (
    <div className="App">
      {/* <Student name={"새싹"} grade={3} handleClick={handleClick} /> */}
      {/* <hr/> */}
      {/* <Card title="오늘 배울 것은?"><p>TypeScript with React</p></Card> */}
      {/* <TodoList /> */}
      <PostList />
    </div>
  );
}

export default App;
