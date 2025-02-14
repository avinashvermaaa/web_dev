const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { exec } = require("child_process");
const fs = require("fs");
const path = require("path");

const app = express();
const port = 3000;

// Enable CORS for handling cross-origin requests
app.use(cors());

// Middleware to parse JSON
app.use(bodyParser.json());

// Serve static files (HTML, CSS, JS) from the "frontend" folder
app.use(express.static(path.join(__dirname, "../frontend")));

// Route to handle C++ code compilation and execution
app.post("/run", (req, res) => {
  const code = req.body.code;

  // Save the C++ code to a temporary file
  const filePath = path.join(__dirname, "temp.cpp");
  fs.writeFileSync(filePath, code);

  // Compile the C++ code
  exec(
    `g++ "${filePath}" -o "${path.join(__dirname, "temp.out")}"`,
    (err, stdout, stderr) => {
      if (err) {
        // Compilation failed, return the error message
        return res
          .status(400)
          .json({ error: stderr || "Unknown error during compilation." });
      }

      // Run the compiled executable
      exec(
        `"${path.join(__dirname, "temp.out")}"`,
        (runErr, runStdout, runStderr) => {
          // Clean up the temporary files after execution
          fs.unlinkSync(filePath); // Remove the temp.cpp file
          fs.unlinkSync(path.join(__dirname, "temp.out")); // Remove the temp.out file

          if (runErr) {
            return res
              .status(400)
              .json({ error: runStderr || "Error during execution." });
          }

          // Send the output of the program
          res.json({ output: runStdout });
        }
      );
    }
  );
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
