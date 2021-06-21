import React, { useState } from "react";

export default function Todo() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");
  const handleAddTodo = () => {
    setTodos([todo, ...todos]);
    setTodo("");
  };
  return (
    <div>
      <h1>My Todos</h1>
      <div
        className="input-field"
        style={{ display: "flex", flexDirection: "column", maxWidth: "20rem" }}
      >
        <label htmlFor="todo">New Todo</label>
        <input
          type="text"
          name="todo"
          placeholder="type new todo"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />

        <button onClick={handleAddTodo} style={{ marginTop: 20 }}>
          Add Todo
        </button>
      </div>

      <div className="todos">
        {todos.length > 0 ? (
          // Show todos

          <ul>
            {todos.map((todo, index) => (
              <li key={index}>{todo}</li>
            ))}
          </ul>
        ) : (
          <h3>You don't have any todos</h3>
        )}
      </div>
    </div>
  );
}
