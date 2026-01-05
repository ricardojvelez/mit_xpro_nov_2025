const nbaPlayers = [
  { name: "LeBron James", team: "Los Angeles Lakers", scores: [32, 24, 30] },
  { name: "Stephen Curry", team: "Golden State Warriors", scores: [26, 28, 32],},
  { name: "Neemias Queta", team: "Boston Celtics", scores: [24, 26, 30],},
  // More player objects...
];

// Function to filter players by team
function filterPlayersByTeam(teamName) {
  const teamPlayers = [];
  
  for (let i = 0; i < nbaPlayers.length; i++) {
    if (nbaPlayers[i].team === teamName) {
      teamPlayers.push(nbaPlayers[i].name);
    }
  }
  return teamPlayers;
}

// Function to filter players by team #2
function filterPlayersByTeamAlternative(teamName) {
  return nbaPlayers.filter((element) => element.team === teamName);
}
//console.log(filterPlayersByTeamAlternative("Boston Celtics"))

// Output: [ 'LeBron James', 'Anthony Davis' ]
//console.log(filterPlayersByTeam("Los Angeles Lakers"));

function calculateAverageScores(players) {
  const averageScores = [];

  for (let i = 0; i < players.length; i++) {
    const playerScores = players[i].scores;
    let totalScores = 0;
    const numberOfGames = playerScores.length;

    for (let j = 0; j < numberOfGames; j++) {
      totalScores += playerScores[j];
    }

    const averageScore = totalScores / numberOfGames;
    averageScores.push({ name: players[i].name, averageScore: averageScore.toFixed(2) });
  }

  return averageScores;
}

// Output: [ { name: 'LeBron James', averageScore: 28.666666666666668 },
//           { name: 'Kevin Durant', averageScore: 29.333333333333332 },
//           { name: 'Stephen Curry', averageScore: 28.666666666666668 },
//           { name: 'Anthony Davis', averageScore: 26.666666666666668 } ]
console.log(calculateAverageScores(nbaPlayers));

/*--------------------------------------------- END OF NBA.JS ---------------------------------------------*/
