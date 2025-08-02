const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;
const data = require('./data.json');

app.use(cors());

app.get('/api/intern', (req, res) => {
  res.json(data);
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});