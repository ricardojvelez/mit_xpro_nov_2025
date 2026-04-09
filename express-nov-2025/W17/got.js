const express = require('express');
const app = express();
app.use(express.json());
const port = process.env.PORT || 3000;

const characters = [
  { id: 1, name: 'John Snow', House: 'Stark' },
  { id: 2, name: 'Daenerys Targaryen', House: 'Targaryen' },
  { id: 3, name: 'Arya Stark', House: 'Stark' },
  { id: 4, name: 'Sansa Stark', House: 'Stark' },
  { id: 5, name: 'Cersei Lannister', House: 'Lannister' },
  { id: 6, name: 'Jaime Lannister', House: 'Lannister' },
];

app.get('/', (req, res) => {
  res.send('Welcome to the Express API!');
});

app.get('/characters', (req, res) => {
  res.send(characters);
});

app.get('/characters/:id', (req, res) => {
  const idFromParameters = req.params.id;
  const character = characters.find((item) => item.id == (idFromParameters));
  res.send(character);
});

app.post('/characters', (req, res) => {
    console.log(req);
    const newSubmission = req.body;
    console.log(newSubmission);
    characters.push(newSubmission);
    console.log(characters);
    res.json({ message: 'Item received' });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
