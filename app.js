const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

// Endpoints
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date() });
});

app.get('/api/users', (req, res) => {
  res.json([
    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' }
  ]);
});

app.post('/api/users', (req, res) => {
  const newUser = req.body;
  res.status(201).json({ message: 'User created', user: newUser });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});