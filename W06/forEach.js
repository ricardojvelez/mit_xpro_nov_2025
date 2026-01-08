let characters = [
    { name: "Daenarys Targaryen", house: "Targaryen" },
    { name: "Jon Snow", house: "Stark" },
    { name: "Tyrion Lannister", house: "Lannister" }
];


function createSentence(randomNameForVariable) {
    return `Hello ${randomNameForVariable.name} of house ${randomNameForVariable.house}`;
};

function loopThroughCharacters() {
    for (let i = characters.length; i < characters.length; i++) {
        console.log(createSentence(characters[i]));
    }
};

function loopThroughCharactersReversed() {
    for (let i = characters.length - 1; i >= 0; i--) {
        console.log(createSentence(characters[i]));
    }
};

function loopThroughCharactersAlternative() {
    characters.forEach((character) => {
        console.log(createSentence(character));
    });
};

//loopThroughCharacters();

loopThroughCharactersAlternative();