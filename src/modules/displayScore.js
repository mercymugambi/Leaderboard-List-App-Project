export default () => {
  const gameId = 'YIR4bOpTKaS07sRNse1x';
  localStorage.setItem('gameId', gameId);

  const fetchScores = async () => {
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
      console.error(error);
    }
  };

  fetchScores();
};