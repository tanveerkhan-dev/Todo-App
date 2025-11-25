import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./todo.css"
export default function Todo() {
  const [todos, setTodos] = useState([
    { task: "simer-task", id: uuidv4(), isDone: false },
  ]);
  const [task, setTask] = useState("");

  function addTask() {
    if (task.trim() === "") return;
    setTodos((prev) => [
      ...prev,
      { task: task.trim(), id: uuidv4(), isDone: false },
    ]);
    setTask("");
  }
  function handleChange(e) {
    setTask(e.target.value);
  }
  function deleteTask(id) {
    setTodos(todos.filter((t) => t.id !== id));
  }
  function uppercaseAll() {
    setTodos(todos.map((t) => ({ ...t, task: t.task.toUpperCase() })));
  }
  function uppercaseOne(id) {
    setTodos(
      todos.map((t) =>
        t.id === id ? { ...t, task: t.task.toUpperCase() } : t
      )
    );
  }
  function markDone(id) {
    setTodos(
      todos.map((t) => (t.id === id ? { ...t, isDone: true } : t))
    );
  }
  function markAllDone() {
    setTodos(todos.map((t) => ({ ...t, isDone: true })));
  }
  return (
    <div className="main">
      <h1>Todo List</h1>
<div className="search">
      <input type="text" placeholder="Enter a task" value={task} onChange={handleChange}/>
    
      <button onClick={addTask}><i class="fa-solid fa-plus"></i></button>
</div>
      <ul>
        {todos.map((item) => (
          <li key={item.id}>
            <span
              style={
                item.isDone
                  ? { textDecorationLine: "line-through" }
                  : {}
              }
            >
              {item.task}
            </span>
            &nbsp;&nbsp;
            <button onClick={() => deleteTask(item.id)}><i class="fa-solid fa-trash"></i></button>
            <button onClick={() => uppercaseOne(item.id)}>Uppercase One</button>
            <button onClick={() => markDone(item.id)}><i class="fa-solid fa-check"></i></button>
          </li>
        ))}
      </ul>
      <button className="uppercase" onClick={uppercaseAll}>Uppercase All</button>
      <button className="mark"  onClick={markAllDone}>Mark All</button>
    </div>
  );
}
