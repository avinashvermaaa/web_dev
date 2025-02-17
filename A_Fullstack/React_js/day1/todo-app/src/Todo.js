import React, { useState, useEffect } from "react";

function Todo() {
  // State to manage input fields for tasks
  const [task, setTask] = useState("");
  const [priority, setPriority] = useState("Low");
  const [dueDate, setDueDate] = useState("");
  const [category, setCategory] = useState("General");
  const [note, setNote] = useState("");

  // State to manage the list of tasks
  const [tasks, setTasks] = useState([]);

  // State to manage filtering, sorting, and dark mode
  const [filter, setFilter] = useState("All");
  const [sortBy, setSortBy] = useState("None");
  const [darkMode, setDarkMode] = useState(true); // Dark mode toggle

  // Load tasks and dark mode state from localStorage on initial render
  useEffect(() => {
    // Retrieve saved tasks from localStorage
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(savedTasks);

    // Retrieve dark mode state from localStorage (default is false if not found)
    const savedDarkMode = JSON.parse(localStorage.getItem("darkMode"));
    setDarkMode(savedDarkMode !== null ? savedDarkMode : false);
  }, []);

  // Save tasks to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // Save dark mode state to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  // Function to add a new task to the list
  const handleAddTask = () => {
    if (task.trim()) {
      setTasks([
        ...tasks,
        { text: task, priority, dueDate, category, note, completed: false },
      ]);
      // Clear the input fields after adding a task
      setTask("");
      setPriority("Low");
      setDueDate("");
      setCategory("General");
      setNote("");
    }
  };

  // Function to delete a task by index
  const handleDeleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  // Function to toggle the completion status of a task
  const handleToggleComplete = (index) => {
    const updatedTasks = tasks.map((t, i) =>
      i === index ? { ...t, completed: !t.completed } : t
    );
    setTasks(updatedTasks);
  };

  // Function to edit the text of a task
  const handleEditTask = (index, newText) => {
    const updatedTasks = tasks.map((t, i) =>
      i === index ? { ...t, text: newText } : t
    );
    setTasks(updatedTasks);
  };

  // Filter tasks based on the selected filter option
  const filteredTasks = tasks.filter((task) => {
    if (filter === "All") return true; // Show all tasks
    if (filter === "Completed") return task.completed; // Show only completed tasks
    if (filter === "Pending") return !task.completed; // Show only pending tasks
    return true;
  });

  // Sort tasks based on the selected sorting option
  const sortedTasks = filteredTasks.sort((a, b) => {
    if (sortBy === "Priority") {
      const priorityOrder = { High: 1, Medium: 2, Low: 3 };
      return priorityOrder[a.priority] - priorityOrder[b.priority];
    } else if (sortBy === "Due Date") {
      return new Date(a.dueDate) - new Date(b.dueDate);
    }
    return 0; // No sorting if "None" is selected
  });

  return (
    <div
      style={{
        padding: "20px",
        fontFamily: "Arial",
        backgroundColor: darkMode ? "#333" : "#fff", // Background color changes based on dark mode
        color: darkMode ? "#fff" : "#000", // Text color changes based on dark mode
        minHeight: "100vh",
      }}
    >
      <h2>Todo List with Categories, Notes, and Dark Mode</h2>

      {/* Button to toggle dark mode */}
      <button onClick={() => setDarkMode(!darkMode)}>
        Toggle {darkMode ? "Light" : "Dark"} Mode
      </button>

      {/* Input fields for adding a new task */}
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

      {/* Note input field for the task */}
      <textarea
        placeholder="Add a note for this task"
        value={note}
        onChange={(e) => setNote(e.target.value)}
        style={{ width: "100%", height: "50px", marginBottom: "10px" }}
      />

      {/* Filtering and sorting options */}
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

      {/* Task list display */}
      <ul>
        {sortedTasks.map((t, index) => (
          <li
            key={index}
            style={{
              textDecoration: t.completed ? "line-through" : "none", // Strikethrough for completed tasks
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
