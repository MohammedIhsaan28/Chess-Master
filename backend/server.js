const express = require('express');
const path = require('path');
const compression = require('compression'); // Optional for better performance

const app = express();
const PORT = process.env.PORT || 3000;

// Enable gzip compression
app.use(compression());

// Serve static files from /dist/your-app-name
app.use(express.static(path.join(__dirname, 'dist/your-app-name')));

// Redirect any unknown paths to index.html (so Angular can handle routing)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/your-app-name/index.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
