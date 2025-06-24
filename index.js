const express = require('express');
const app = express();

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
console.log("sdf")

// app.listen(3000,()=>console.log("listining in 3000"))
module.exports = (req, res) => {
  app(req, res); // Vercel handler
};
