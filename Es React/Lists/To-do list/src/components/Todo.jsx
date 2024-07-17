import { useState } from 'react';

function TodoList() {
    const [todos, setTodos] = useState([
        'Learn React',
        'Build a Todo App',
        'Deploy the app'
    ]);

    const [newTodo, setNewTodo] = useState('');

    function handleInputChange(e) {
        setNewTodo(e.target.value);
    };

    function handleAddTodo() {
        if (newTodo.trim() !== '') {
            setTodos([...todos, newTodo]);
            setNewTodo('');
        }
    };

    function handleReset() {
        setTodos([]);
    }

    function handleRemove(toRemove) {
        const newTodos = todos.filter((_, i) => i !== toRemove);
        setTodos(newTodos);
    };



    return (
        <div>
            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>{todo} <button onClick={() => {handleRemove(toRemove)}}>Remove</button></li>
                ))}
            </ul>
            <input
                type="text"
                value={newTodo}
                onChange={handleInputChange}
                placeholder="Add a new todo"
            />
            <button onClick={handleAddTodo}>Add Todo</button>
            <button onClick={handleReset}>Reset</button>
        </div>
    );
};

export default TodoList;