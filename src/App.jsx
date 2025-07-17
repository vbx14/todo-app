import React from 'react';
import { TodoInput, TodoList, Header } from './components';

function App() {
  return (
    <div>
      <Header />
      <TodoInput />
      <TodoList />
    </div>
  );
}

export default App;
