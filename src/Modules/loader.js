const playerList = [
  {
    player: 'Oscar',
    score: 100,
  },
  {
    player: 'Francisca',
    score: 20,
  },
  {
    player: 'Arthur',
    score: 50,
  },
  {
    player: 'Andres',
    score: 78,
  },
  {
    player: 'James',
    score: 125,
  },
  {
    player: 'Karla',
    score: 77,
  },
  {
    player: 'Cinthia',
    score: 42,
  },
];

const tableScrores = document.querySelector('#scoreTable');

const displayScores = () => {
  tableScrores.innerHTML = '';
  playerList.forEach((player, index) => {
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
      <td id="player${index + 1}">${player.player}: ${player.score}</td>
    `;
    if (index % 2 !== 0) {
      newRow.classList.add('opacy');
    }
    tableScrores.appendChild(newRow);
  });
};

export default displayScores;