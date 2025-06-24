const express = require('express');
const cors = require('cors'); // ✅ Import cors
const app = express();

app.use(cors()); // ✅ Enable CORS for all routes
app.use(express.json());

app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello, world!' });
});

app.post('/api/data', (req, res) => {
  res.json({ received: req.body });
});

app.put('/api/update', (req, res) => {
  res.json({ updated: req.body });
});

app.delete('/api/delete', (req, res) => {
  res.json({ message: 'Deleted successfully' });
});

// Vercel serverless function handler
module.exports = (req, res) => {
  app(req, res);
};
