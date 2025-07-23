const express = require('express');
const cors = require('cors');
const app = express();
const port = 5001;

app.use(cors());

const benefits = require('./data.json');

app.get('/benefits', (req, res) => {
  res.json(benefits);
});

app.listen(port, () => {
  console.log(`Benefits service running on port ${port}`);
});
