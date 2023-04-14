export default () => {
  const refreshButton = document.querySelector('.btn-refresh');

  refreshButton.addEventListener('click', async () => {
    const gameId = localStorage.getItem('gameId');
    try {
      const response = await fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameId}/scores/`);
      const data = await response.json();

      const scoresList = document.querySelector('.scoresList');
      scoresList.innerHTML = '';

      data.result.forEach((score) => {
        const listItem = document.createElement('li');
        listItem.classList.add('scoreListItem');
        listItem.textContent = `${score.user}: ${score.score}`;
        scoresList.appendChild(listItem);
      });
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Error fetching recent scores:', error);
    }
  });
};