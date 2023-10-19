import './App.css';
import { useState } from 'react';

function App() {
  const [newTodo, setNewTodo] = useState('');
  console.log(newTodo);

  return (
    <>
    <div>
      <input type="text" placeholder='Add Todo' value={newTodo} onChange={e => setNewTodo(e.target.value)}/>
      <button>Add Todo</button>
    </div>
    <ul>
      <li>Go For a Walk</li>
    </ul>
    </>
  )
}

export default App
