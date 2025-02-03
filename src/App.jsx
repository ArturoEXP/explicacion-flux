import { useContext, useState } from 'react'
import './App.css'
import { TodoList } from './components/TodoList';
import TodoContext from './context/TodoContext';
import { addTodo } from './dispatch/TodoDispatcher';

function App() {
  const { dispatch } = useContext(TodoContext);
  const [text, setText] = useState('');

      // Función para manejar el envío del formulario
      const handleSubmit = (e) => {
        e.preventDefault();
        if (text.trim()) {
            addTodo(dispatch, { id: Date.now(), text });
            setText('');
        }
    };

  return (
    <div>
      <h1>Lista de Tareas</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Agregar tarea"
        />
        <button type="submit">Agregar</button>
      </form>
      <TodoList />
    </div>
  )
}

export default App
