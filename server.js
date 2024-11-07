const express = require('express');
const app = express();
const path = require('path');

// Set security headers for SharedArrayBuffer support
app.use((req, res, next) => {
  res.setHeader('Cross-Origin-Opener-Policy', 'same-origin');
  res.setHeader('Cross-Origin-Embedder-Policy', 'require-corp');
  next();
});

// Serve static files from the 'public' folder
app.use(express.static('public')); 

// Serve convert.html at the root
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'convert.html'));
});

// Start the server on port 3000
app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');  
});
