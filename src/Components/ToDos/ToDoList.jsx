const TodoList = ({ todos, toggleTodo }) => {
  const getPriorityClass = (priority) => {
    switch (priority) {
      case 'Baja':
        return 'text-success';
      case 'Media':
        return 'text-warning';
      case 'Alta':
        return 'text-danger';
      default:
        return '';
    }
  };

  return (
    <ul className="list-group">
      {todos.map((todo, index) => (
        <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
          <span
            className={getPriorityClass(todo.priority)}
            style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
          >
            {todo.text}
          </span>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => toggleTodo(index)}
            className="ms-3"/>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;


