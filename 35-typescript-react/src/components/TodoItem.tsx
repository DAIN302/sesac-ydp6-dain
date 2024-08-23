import React from 'react'
import { TodoItemType } from '../types/types'
import '../styles/TodoList.scss'

// #2. Todo Item 작성

// TodoItem 의 props 타입 정의
// {todo} => {todo : {id, text, completed}}
interface Props {
    todo : TodoItemType;
    toggleComplete(id:number) : void;
}

export default function TodoItem({todo, toggleComplete} : Props ) {
  return (
        // #7. css 추가
        <li className={todo.completed?'completed' : ''}>
            <label>
                <input type='checkbox' defaultChecked={todo.completed} onChange={() => toggleComplete(todo.id)}/>
                {todo.text}
            </label>
        </li>
  )
}
