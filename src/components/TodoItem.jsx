import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleTodo, deleteTodo } from '../redux/todoSlice';

export default function TodoItem({ todo }) {
  const dispatch = useDispatch();

  return (
    <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <div>
        <span onClick={() => dispatch(toggleTodo(todo.id))}>
          <b>{todo.text}</b>
        </span>
        <small><center>Due: {todo.dueDate || 'None'} | Priority: {todo.priority}</center></small>
      </div>
      <button onClick={() => dispatch(deleteTodo(todo.id))}>❌</button>
    </li>
  );
}

