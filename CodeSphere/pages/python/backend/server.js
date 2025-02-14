const express = require("express");
const bodyParser = require("body-parser");
const { exec } = require("child_process");
const path = require("path");
const fs = require("fs");
const cors = require("cors"); // Add CORS support

const app = express();
const port = 3000;

// Middleware to parse JSON request bodies
app.use(bodyParser.json());

// Enable CORS for all origins (can be restricted later)
app.use(cors());

// Endpoint to run Python code
app.post("/run-python", (req, res) => {
  const { code, input } = req.body;

  // Ensure that code is provided and is a string
  if (!code || typeof code !== "string" || code.trim() === "") {
    console.error("No Python code provided in the request body.");
    return res.status(400).json({ error: "No Python code provided." });
  }

  // Update filePath to the current directory
  const filePath = path.join(__dirname, "temp_code.py");

  // Log the path being used for debugging
  console.log(`Writing Python code to: ${filePath}`);

  // Write the Python code to the temporary file
  fs.writeFile(filePath, code, (writeError) => {
    if (writeError) {
      console.error("Error writing Python code to file:", writeError);
      return res
        .status(500)
        .json({ error: "Error saving Python code to file." });
    }

    console.log(`Python code saved to ${filePath}`);

    // Ensure the file path is correctly quoted to handle spaces in directory names
    const quotedFilePath = `"${filePath}"`;

    // Log the quoted file path for debugging
    console.log(`Running command: python3 ${quotedFilePath}`);

    // Run the Python code using exec, ensure the path is quoted
    exec(`python3 ${quotedFilePath}`, (execError, stdout, stderr) => {
      if (execError) {
        console.error("Error executing Python code:", execError);
        console.error("Execution stderr:", stderr);
        return res.status(500).json({
          error: `Execution error: ${stderr || execError.message}`,
        });
      }

      if (stderr) {
        console.error("Python stderr:", stderr);
      }

      console.log("Python execution output:", stdout);

      // Return the output from Python code
      res.json({ output: stdout });

      // Clean up the temporary file after execution
      fs.unlink(filePath, (unlinkError) => {
        if (unlinkError) {
          console.error("Error deleting temporary file:", unlinkError);
        } else {
          console.log("Temporary Python file deleted.");
        }
      });
    });
  });
});

// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
