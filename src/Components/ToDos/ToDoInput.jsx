import React, { useState } from 'react';

const TodoInput = ({ addTodo }) => {
  const [newTodo, setNewTodo] = useState('');
  const [priority, setPriority] = useState('Baja');

  const handleSubmit = () => {
    if (newTodo === '') return;
    const todo = {
      text: newTodo,
      completed: false,
      priority: priority,
    };
    addTodo(todo);
    setNewTodo('');
  };

  return (
    <div>
      <h2>Nueva Actividad</h2>
      <form className="d-flex flex-column">
        <div className="mb-3">
          <label htmlFor="newTodo" className="form-label">Pendiente por Asignar</label>
          <input
            type="text"
            className="form-control"
            id="newTodo"
            value={newTodo}
            onChange={(event) => setNewTodo(event.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="priority" className="form-label">Prioridad</label>
          <select className="form-select" id="priority" value={priority} onChange={(event) => setPriority(event.target.value)}>
            <option value="Baja">Baja</option>
            <option value="Media">Media</option>
            <option value="Alta">Alta</option>
          </select>
        </div>
        <button type="button" className="btn btn-primary" onClick={handleSubmit}>Guardar</button>
      </form>
    </div>
  );
};

export default TodoInput;
