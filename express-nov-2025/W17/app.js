const express = require('express');
const serverPort = 3000;
const app = express();
app.use(express.json());

const data = [{ name: 'orange', quantity: 10 }];
const datadata = [{ name: 'apple', quantity: 20 }];

app.get('/', (req, res) => {
  res.send('Hello from Express!');
});

app.get('/data', (req, res) => {
  res.send(data);
});

app.get('/data2', (req, res) => {
  res.send(datadata);
});

app.post('/data', (req, res) => {
  const newSubmission = req.body;
  data.push(newSubmission);
  res.json({ message: 'Item received' });
});

app.listen(serverPort, () => console.log('Express server is running'));