let player1 = "Cristiano Ronaldo";
let player2 = "Lionel Messi";


//console.log(player1.charAt(1)); // Output: "C"
player2.charAt(0); // Output: "L"

//console.log(player1.length); // Output: 17
player2.length; // Output: 11

player1.toUpperCase(); // Output: "CRISTIANO RONALDO"
//console.log(player2.toLowerCase()); // Output: "lionel messi"

console.log(player1.includes("Ronaldo")); // Output: true
console.log(player1.includes("Ron")); // Output: true

//console.log(player1.includes("ronaldo")); // Output: false
//console.log(player2.includes("ronaldo")); // Output: false

//console.log(player1.slice(0, 9)); // Output: "Cristiano"
//console.log(player2.slice(0, 6)); // Output: "Lione"

player1 = player1.replace("Ronaldo", "CR7");
player2 = player2.replace("Messi", "Leo");

//console.log(`My favourite soccer players are ${player1} and ${player2}.`);
