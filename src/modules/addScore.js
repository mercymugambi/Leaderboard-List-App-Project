export default () => {
  const scoreForm = document.querySelector('.scoreForm');

  scoreForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const userName = document.querySelector('.score-input[name="name"]').value;
    const Score = document.querySelector('.score-input[name="score"]').value;
    const gameId = localStorage.getItem('gameId');
    try {
      await fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameId}/scores/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          user: userName,
          score: Score,
        }),
      });
      // const refreshButton = document.querySelector('.btn-refresh');
      // refreshButton.click();
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Error adding new score:', error);
    }
  });
};