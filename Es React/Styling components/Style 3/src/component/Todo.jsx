import styles from "./Todo.module.scss";

export const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const handleInputChange = (todo) => {
    setNewTodo(todo.target.value);
  };

  const handleReset = () => {
    setTodos([]);
  }

  const handleAddTodo = () => {
    if (newTodo.trim() !== "") {
      setTodos([...todos, newTodo]);
      setNewTodo("");
    }
  };

  const handleRemoveTodo = (indexToRemove) => {
    setTodos(todos.filter((_, index) => index !== indexToRemove));
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Todo List</h1>
      <div className={styles.inputGroup}>
        <input
          type="text"
          value={newTodo}
          onChange={handleInputChange}
          placeholder="Inserisci un nuovo Todo"
          className={styles.input}
        />
        <button onClick={handleAddTodo} className={styles.addButton}>Aggiungi</button>
      </div>
      <button onClick={handleReset} className={styles.resetButton}>Resetta</button>
      <ul className={styles.todoList}>
        {todos.map((todo, index) => (
          <li key={index} className={styles.todoItem}>
            {todo}
            <button
              onClick={() => handleRemoveTodo(index)}
              className={styles.removeButton}
            >
              Rimuovi
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};