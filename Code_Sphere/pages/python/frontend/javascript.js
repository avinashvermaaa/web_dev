// Global variable to store the filename
let fileName = "code.py";

// Event listener for the "Run Code" button (compiling and running Python code)
document.getElementById("runButton").addEventListener("click", async () => {
  const code = document.getElementById("pythonCode").value; // Get Python code
  const stdinInput = document.getElementById("stdinInput").value;
  const outputElement = document.getElementById("output");

  // Clear previous output
  outputElement.textContent = "";

  // If the user has not entered any code
  if (code.trim() === "") {
    outputElement.textContent = "Please enter some Python code!";
    return;
  }

  try {
    // Send code to the server for execution (Python in this case)
    const response = await fetch("http://localhost:3000/run-python", {
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
        errorData.error || "An unknown error occurred during execution.";
      return;
    }

    // Parse the server's response
    const data = await response.json();

    // Display the executed output
    outputElement.textContent = data.output || "No output from program.";
  } catch (error) {
    // In case of a network or server error
    console.error("Fetch error:", error);
    outputElement.textContent =
      "An error occurred while communicating with the server.\nTry running the server first or please try again later.";
  }
});

// Event listener for the "Download Code" button to download the Python code as a .py file
document
  .getElementById("downloadButton")
  .addEventListener("click", function () {
    const pythonCode = document.getElementById("pythonCode").value; // Get code from textarea

    if (!pythonCode) {
      alert("Please enter some Python code before downloading!");
      return;
    }

    console.log("Code to be downloaded:", pythonCode); // Debugging log to check the code content

    // Create a Blob from the Python code
    const blob = new Blob([pythonCode], { type: "text/plain" });

    // Create a temporary link element
    const link = document.createElement("a");

    // Create an object URL from the Blob and assign it to the href attribute
    const url = URL.createObjectURL(blob);
    link.href = url;

    // Set the filename for the downloaded file
    link.download = fileName;

    // Programmatically trigger the download
    link.click();

    // Release the object URL after the download to free up memory
    URL.revokeObjectURL(url);
  });

// Event listener for the "Rename" button to rename the file
document.getElementById("renameButton").addEventListener("click", function () {
  const newName = prompt(
    "Enter a new name for your file (without extension):",
    "code"
  );
  if (newName && newName.trim() !== "") {
    fileName = `${newName.trim()}.py`; // Update the global file name variable to .py
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
