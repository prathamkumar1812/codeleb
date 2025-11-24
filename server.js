// server.js
const express = require('express');
const app = express();

// Define a single endpoint
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Use PORT from environment or default to 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
