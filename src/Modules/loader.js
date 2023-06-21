const tableScrores = document.querySelector('#scoreTable');

const displayScores = (playerList) => {
  tableScrores.innerHTML = '';
  playerList.forEach((player, index) => {
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
      <td id="player${index + 1}">${player.user}: ${player.score}</td>
    `;
    if (index % 2 !== 0) {
      newRow.classList.add('opacy');
    }
    tableScrores.appendChild(newRow);
  });
};

export default displayScores;