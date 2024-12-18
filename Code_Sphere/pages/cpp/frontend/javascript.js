// JavaScript for handling code execution and other features

// Global variable to store the filename
let fileName = "code.cpp";

// Event listener for the "Run Code" button (compiling and running C++ code)
document.getElementById("runButton").addEventListener("click", async () => {
  const code = document.getElementById("cppCode").value;
  const stdinInput = document.getElementById("stdinInput").value;
  const outputElement = document.getElementById("output");

  // Clear previous output
  outputElement.textContent = "";

  // If the user has not entered any code
  if (code.trim() === "") {
    outputElement.textContent = "Please enter some C++ code!";
    return;
  }

  try {
    // Send code to the server for compilation and execution
    const response = await fetch("http://localhost:3000/run", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ code: code, input: stdinInput }),
    });

    // Check if the server responded with an error
    if (!response.ok) {
      const errorData = await response.json();
      outputElement.textContent =
        errorData.error || "An unknown error occurred during compilation.";
      return;
    }

    // Parse the server's response
    const data = await response.json();

    // Display the compiled output
    if (data.output) {
      outputElement.textContent = data.output;
    } else {
      outputElement.textContent = "No output from program.";
    }
  } catch (error) {
    // In case the fetch request fails (e.g., network error)
    console.error("Fetch error:", error);
    // server offline message
  outputElement.textContent =
    "An error occurred while communicating with the server.\n" +
    "\n"+
    "Try running the server first. \n" + 
    "or\n" +
    "Please try again later.";
  }
});

// Event listener for the "Download Code" button to download the C++ code as a .cpp file
document
  .getElementById("downloadButton")
  .addEventListener("click", function () {
    const cppCode = document.getElementById("cppCode").value;

    if (!cppCode) {
      alert("Please enter some C++ code before downloading!");
      return;
    }

    const blob = new Blob([cppCode], { type: "text/plain" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = fileName; // Use the global variable for the file name
    link.click();
  });

// Event listener for the "Rename" button to rename the file
document.getElementById("renameButton").addEventListener("click", function () {
  const newName = prompt(
    "Enter a new name for your file (without extension):",
    "code"
  );
  if (newName && newName.trim() !== "") {
    fileName = `${newName.trim()}.cpp`; // Update the global file name variable
  }
});

// Dark mode toggle functionality
document
  .getElementById("darkModeButton")
  .addEventListener("click", function () {
    const darkModeButton = document.getElementById("darkModeButton");
    document.body.classList.toggle("dark-mode");
    document.querySelector(".container").classList.toggle("dark-mode");
    const buttons = document.querySelectorAll(".top-bar button");
    buttons.forEach((button) => {
      button.classList.toggle("dark-mode"); // Apply dark mode style to buttons
    });

    // Switch between sun/moon icons based on the mode
    if (document.body.classList.contains("dark-mode")) {
      darkModeButton.textContent = "🌞"; // Sun icon in dark mode
    } else {
      darkModeButton.textContent = "🌙"; // Moon icon in light mode
    }
  });
