import React, { useState } from "react";

export default function Todo() {
  const [todos, setTodos] = useState([]);
  const [form, setForm] = useState({
    title: "",
    description: "",
    status: "pending",
    priority: "Low",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const addTodo = (e) => {
    e.preventDefault(); // ❗ required to stop page reload
    if (!form.title.trim()) return;

    setTodos([...todos, { id: Date.now(), ...form }]);
    setForm({
      title: "",
      description: "",
      status: "pending",
      priority: "Low",
    });
  };

  return (
    <div>
      <form onSubmit={addTodo}>
        <input
          name="title"
          value={form.title}
          placeholder="Enter title"
          onChange={handleChange}
        />

        <textarea
          name="description"
          value={form.description}
          placeholder="Enter data"
          onChange={handleChange}
        />

        <select name="status" value={form.status} onChange={handleChange}>
          <option value="pending">pending</option>
          <option value="completed">completed</option>
        </select>

        <label>
          <input
            type="radio"
            name="priority"
            value="Low"
            checked={form.priority === "Low"}
            onChange={handleChange}
          />
          Low
        </label>

        <label>
          <input
            type="radio"
            name="priority"
            value="Medium"
            checked={form.priority === "Medium"}
            onChange={handleChange}
          />
          Medium
        </label>

        <label>
          <input
            type="radio"
            name="priority"
            value="High"
            checked={form.priority === "High"}
            onChange={handleChange}
          />
          High
        </label>

        <button type="submit">Submit</button>
      </form>
      <hr />
      {todos.map((todo) => (
        <div key={todo.id}>
          <h4>{todo.title}</h4>
          <p>{todo.description}</p>
          <p>status:{todo.status}</p>
          <p>priority:{todo.priority}</p>
        </div>
      ))}
    </div>
  );
}
