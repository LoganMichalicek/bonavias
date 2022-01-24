const path = require('path');
const express = require('express');

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, '/client/dist')));

app.get('/submit', (req, res) => {
  console.log('Get request received by client!');
  res.sendStatus(200);
})

app.listen(port, () => {
  console.log(`Express Server is running on port ${port}`);
});