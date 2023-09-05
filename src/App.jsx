import './App.css'
import { useState } from 'react'
import TodoList from './Components/ToDos/ToDoList';
import TodoInput from './Components/ToDos/TodoInput';

const App = () => {
  const [todos, setTodos] = useState([]);

  const toggleTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  return (
    <div className="container">
      <div className="row border rounded">
        <div className="col-6 border-end">
          <h2>Lista de Pendientes</h2>
          <div className="border rounded">
            <TodoList todos={todos} toggleTodo={toggleTodo} />
          </div>
        </div>
        <div className="col-6">
          <TodoInput addTodo={addTodo} />
        </div>
      </div>
    </div>
  );
};

export default App;

