/* eslint-disable no-restricted-syntax */
// Define leaderboard array of scores
const leaderboard = [
  { name: 'John:', score: 85 },
  { name: 'Jane:', score: 72 },
  { name: 'Bob:', score: 67 },
];

// Display leaderboard function
function displayLeaderboard() {
  // Get leaderboard HTML element
  const leaderboardEl = document.getElementById('leaderboard');

  // Clear existing leaderboard HTML
  leaderboardEl.innerHTML = '';

  // Create leaderboard header
  const headerEl = document.createElement('li');
  headerEl.classList.add('header');

  const nameEl = document.createElement('span');
  nameEl.classList.add('name');
  nameEl.innerText = 'Name';
  headerEl.appendChild(nameEl);

  const scoreEl = document.createElement('span');
  scoreEl.classList.add('score');
  scoreEl.innerText = 'Score';
  headerEl.appendChild(scoreEl);

  leaderboardEl.appendChild(headerEl);

  // Loop through each score in leaderboard array and create HTML elements
  for (const score of leaderboard) {
    const scoreEl = document.createElement('li');
    scoreEl.classList.add('score');

    const nameEl = document.createElement('span');
    nameEl.classList.add('name');
    nameEl.innerText = score.name;
    scoreEl.appendChild(nameEl);

    const valueEl = document.createElement('span');
    valueEl.classList.add('score');
    valueEl.innerText = score.score;
    scoreEl.appendChild(valueEl);

    leaderboardEl.appendChild(scoreEl);
  }
}

// Add score function
function addScore(name, score) {
  leaderboard.push({ name, score });
}

// Test display leaderboard and add score functions
displayLeaderboard();
addScore('Alice:', 93);
displayLeaderboard();
