const express = require('express');
const cors = require('cors');
const app = express();
const port = 5002;

app.use(cors());

const futureScope = require('./data.json');

app.get('/future', (req, res) => {
  res.json(futureScope);
});

app.listen(port, () => {
  console.log(`Future Scope service running on port ${port}`);
});
