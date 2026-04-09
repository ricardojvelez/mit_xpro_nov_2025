// init.js

const express = require('express');
const serverPort = 3000;
const app = express();

app.get('/', (req, res) => {
  res.send('Hello from Express!!!!');
});

app.listen(serverPort, () => console.log('Express server is running'));
