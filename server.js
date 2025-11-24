// server.js
const express = require('express');
const path = require('path'); // <-- import path module
const app = express();

// Define a single endpoint
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html')); // <-- use absolute path
});

// Use PORT from environment or default to 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
