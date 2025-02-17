import React, { useState, useEffect } from "react";

function Todo() {
  const [task, setTask] = useState("");
  const [priority, setPriority] = useState("Low");
  const [dueDate, setDueDate] = useState("");
  const [category, setCategory] = useState("General");
  const [note, setNote] = useState("");
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("All");
  const [sortBy, setSortBy] = useState("None");
  const [darkMode, setDarkMode] = useState(false); // Dark mode state

  // Load tasks from local storage on initial render
  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(savedTasks);
    const savedDarkMode = JSON.parse(localStorage.getItem("darkMode")) || false;
    setDarkMode(savedDarkMode);
  }, []);

  // Save tasks and dark mode state to local storage
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [tasks, darkMode]);

  const handleAddTask = () => {
    if (task.trim()) {
      setTasks([
        ...tasks,
        { text: task, priority, dueDate, category, note, completed: false },
      ]);
      setTask("");
      setPriority("Low");
      setDueDate("");
      setCategory("General");
      setNote("");
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

  // Sort tasks based on the selected sort criteria
  const sortedTasks = filteredTasks.sort((a, b) => {
    if (sortBy === "Priority") {
      const priorityOrder = { High: 1, Medium: 2, Low: 3 };
      return priorityOrder[a.priority] - priorityOrder[b.priority];
    } else if (sortBy === "Due Date") {
      return new Date(a.dueDate) - new Date(b.dueDate);
    }
    return 0;
  });

  return (
    <div
      style={{
        padding: "20px",
        fontFamily: "Arial",
        backgroundColor: darkMode ? "#333" : "#fff",
        color: darkMode ? "#fff" : "#000",
        minHeight: "100vh",
      }}
    >
      <h2>Todo List with Categories, Notes, and Dark Mode</h2>

      <button onClick={() => setDarkMode(!darkMode)}>
        Toggle {darkMode ? "Light" : "Dark"} Mode
      </button>

      <div style={{ margin: "10px 0" }}>
        <label>Task: </label>
        <input
          type="text"
          value={task}
          placeholder="Enter a new task"
          onChange={(e) => setTask(e.target.value)}
        />

        <label style={{ marginLeft: "10px" }}>Priority: </label>
        <select value={priority} onChange={(e) => setPriority(e.target.value)}>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>

        <label style={{ marginLeft: "10px" }}>Due Date: </label>
        <input
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
        />

        <label style={{ marginLeft: "10px" }}>Category: </label>
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="General">General</option>
          <option value="Work">Work</option>
          <option value="Personal">Personal</option>
          <option value="Urgent">Urgent</option>
        </select>

        <button onClick={handleAddTask} style={{ marginLeft: "10px" }}>
          Add Task
        </button>
      </div>

      <textarea
        placeholder="Add a note for this task"
        value={note}
        onChange={(e) => setNote(e.target.value)}
        style={{ width: "100%", height: "50px", marginBottom: "10px" }}
      />

      <div style={{ margin: "10px 0" }}>
        <label>Filter by: </label>
        <select value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="All">All</option>
          <option value="Completed">Completed</option>
          <option value="Pending">Pending</option>
        </select>

        <label style={{ marginLeft: "10px" }}>Sort by: </label>
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="None">None</option>
          <option value="Priority">Priority</option>
          <option value="Due Date">Due Date</option>
        </select>
      </div>

      <ul>
        {sortedTasks.map((t, index) => (
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
            <span style={{ marginLeft: "10px" }}>
              Due: {t.dueDate || "None"}
            </span>
            <span style={{ marginLeft: "10px" }}>Category: {t.category}</span>
            <p>Note: {t.note}</p>
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
