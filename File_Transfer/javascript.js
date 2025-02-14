// Get references to DOM elements
const uploadButton = document.getElementById("upload-btn");
const fileInput = document.getElementById("file-input");
const sendFilesButton = document.getElementById("send-files-btn");
const requestFilesButton = document.getElementById("request-files-btn");
const sentButton = document.getElementById("sent-btn");
const loginButton = document.getElementById("login-btn");

// Trigger file input dialog when the upload button is clicked
uploadButton.addEventListener("click", () => {
  fileInput.click(); // Simulate a click on the hidden file input
});

// Handle file selection from the file input
fileInput.addEventListener("change", (e) => {
  const files = e.target.files;
  handleFileUpload(files);
});

// Handle file upload logic
function handleFileUpload(files) {
  if (files.length === 0) return;
  alert(`You have selected ${files.length} file(s) for upload.`);
  // Here you would typically send the files to the server
}

// Optional: Trigger file input dialog when the "Upload Files" button is clicked
uploadButton.addEventListener("click", () => {
  fileInput.click(); // Simulate a click on the hidden file input
});

// Example button actions (can be customized for your use case)
sendFilesButton.addEventListener("click", () => {
  alert("Send Files button clicked!");
});

requestFilesButton.addEventListener("click", () => {
  alert("Request Files button clicked!");
});

sentButton.addEventListener("click", () => {
  alert("Sent button clicked!");
});

loginButton.addEventListener("click", () => {
  alert("Login button clicked!");
});
