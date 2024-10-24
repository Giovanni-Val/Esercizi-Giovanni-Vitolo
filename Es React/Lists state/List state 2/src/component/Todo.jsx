import React, { useState } from "react";

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

  return (
    <div>
      <h1>Todo List</h1>
      <input
        type="text"
        value={newTodo}
        onChange={handleInputChange}
        placeholder="Inserisci un nuovo Todo"
      />
      <button onClick={handleAddTodo}>Aggiungi</button>
      <button onClick={handleReset}>Resetta</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}
