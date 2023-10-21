import './App.css';
import { useState } from 'react';

function App() {
  const [todoText, setTodoText] = useState('');
  const [todoItems, setTodoItems] = useState([]);

  const addTodo = () => {
    if (todoText.trim() === '') {
      return;
    }

    const newTodo = {
      id: Math.random(),
      text: todoText,
    };

    setTodoItems([...todoItems, newTodo]);
    setTodoText('');
  };

  const deleteTodo = (id) => {
    const newArr = todoItems.filter((todo) => todo.id !== id);
    setTodoItems(newArr);
  };

  return (
    <>
      <div>
        <h1>To Do List</h1>
        <input
          type="text"
          placeholder="Add Todo"
          value={todoText}
          onChange={(e) => setTodoText(e.target.value)}
        />
        <button onClick={addTodo}>Add Todo</button>
      </div>
      <ul>
        {todoItems.map((todo) => (
          <li key={todo.id}>
            {todo.text} <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;

