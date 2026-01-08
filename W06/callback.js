//Callback function
function callbackFunction() {
    console.log('Hello, I am a callback function!');
};

function greetCharacter(name, potatoes) {
    potatoes();
    console.log(`Hello ${name}`);
};

//Passing function as an argument
//greetCharacter('John Cena', callbackFunction);
//greetCharacter('John Doe', function() {console.log('Hello, I am a callback function 2!');});
greetCharacter('John Doe', () => console.log('Hello, I am a callback function!'));


/*
function abc () {
    //function body
}
() => {return "something"}
() => "something"
 */