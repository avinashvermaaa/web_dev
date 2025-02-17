import React, { useState, useEffect } from "react";

function Todo() {
  const [task, setTask] = useState("");
  const [priority, setPriority] = useState("Low");
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("All"); // For task filtering

  // Load tasks from local storage on initial render
  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(savedTasks);
  }, []);

  // Save tasks to local storage whenever they change
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleAddTask = () => {
    if (task.trim()) {
      setTasks([
        ...tasks,
        { text: task, priority: priority, completed: false },
      ]);
      setTask("");
      setPriority("Low");
    }
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const handleToggleComplete = (index) => {
    const updatedTasks = tasks.map((t, i) =>
      i === index ? { ...t, completed: !t.completed } : t
    );
    setTasks(updatedTasks);
  };

  const handleEditTask = (index, newText) => {
    const updatedTasks = tasks.map((t, i) =>
      i === index ? { ...t, text: newText } : t
    );
    setTasks(updatedTasks);
  };

  // Filter tasks based on the selected filter option
  const filteredTasks = tasks.filter((task) => {
    if (filter === "All") return true;
    if (filter === "Completed") return task.completed;
    if (filter === "Pending") return !task.completed;
    return true;
  });

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>Todo List with Priority & Filters</h2>

      <input
        type="text"
        value={task}
        placeholder="Enter a new task"
        onChange={(e) => setTask(e.target.value)}
      />
      <select value={priority} onChange={(e) => setPriority(e.target.value)}>
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>
      <button onClick={handleAddTask}>Add Task</button>

      {/* Filter options */}
      <div style={{ margin: "10px 0" }}>
        <label>Filter by: </label>
        <select value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="All">All</option>
          <option value="Completed">Completed</option>
          <option value="Pending">Pending</option>
        </select>
      </div>

      <ul>
        {filteredTasks.map((t, index) => (
          <li
            key={index}
            style={{
              textDecoration: t.completed ? "line-through" : "none",
              padding: "5px 0",
              color:
                t.priority === "High"
                  ? "red"
                  : t.priority === "Medium"
                  ? "orange"
                  : "green",
            }}
          >
            <input
              type="checkbox"
              checked={t.completed}
              onChange={() => handleToggleComplete(index)}
            />
            <input
              type="text"
              value={t.text}
              onChange={(e) => handleEditTask(index, e.target.value)}
              style={{ marginRight: "10px" }}
            />
            <span style={{ fontWeight: "bold" }}>Priority: {t.priority}</span>
            <button
              onClick={() => handleDeleteTask(index)}
              style={{ marginLeft: "10px", color: "red" }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;
