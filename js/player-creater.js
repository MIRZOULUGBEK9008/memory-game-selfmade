const playerCreater = ({ numberOfPlayers }) => {
  if (numberOfPlayers !== "1") {
    const players = [];
    const size = Number(numberOfPlayers);
    for (let playerNumber = 1; playerNumber <= size; playerNumber++) {
      const playerData = { name: `Player ${playerNumber}`, pair: 0 };
      players.push(playerData);
    }
    return players;
  } else {
    const player = { time: 0, moves: 0 };
    return Object.entries(player);
  }
};

export default playerCreater;
