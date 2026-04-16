const express = require('express');
const app = express();
app.use(express.json());
const port = process.env.PORT || 3000;

const characters = [
  { id: 1, name: 'John Snow', house: 'Stark' },
  { id: 2, name: 'Daenerys Targaryen', house: 'Targaryen' },
  { id: 3, name: 'Arya Stark', house: 'Stark' },
  { id: 4, name: 'Sansa Stark', house: 'Stark' },
  { id: 5, name: 'Cersei Lannister', house: 'Lannister' },
  { id: 6, name: 'Jaime Lannister', house: 'Lannister' },
];

/*Week 17*/
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

/*Week 18*/
app.post('/characters', (req, res) => {
  /*
    if(req.body.name === undefined || req.body.house === undefined) {
    res.status(400).send("Name and house are required");
  } */
  const newCharacter = req.body;
  console.log("newCharacter_A: ", newCharacter);

  const nextId = characters.length + 1; //When we add 'Delete' we'll need to use Math.max(...characters.map(char => char.id)) + 1;
  console.log("newCharacter_B: ", newCharacter);

  newCharacter.id = nextId;
  console.log("newCharacter_C: ", newCharacter);

  characters.push(newCharacter);

  res.send(newCharacter);
});

app.put('/characters/:id', (req, res) => {
  const characterToUpdate = characters.find(currentCharacter => currentCharacter.id === parseInt(req.params.id));

  if (!characterToUpdate) {
    res.status(404).send("Character not found");
  } else {
    characterToUpdate.name = req.body.name;
    characterToUpdate.house = req.body.house;
    characterToUpdate.id = parseInt(req.params.id);

    res.send(characterToUpdate);
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
