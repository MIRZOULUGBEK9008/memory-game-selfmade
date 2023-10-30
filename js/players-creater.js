const playersCreater = (numberOfPlayers) => {
  const players = [];
  if (numberOfPlayers !== "1") {
    for (let i = 1; i <= numberOfPlayers; i++) {
      const playerInfo = {
        playerName: `Player ${i}`,
        playerScore: 0,
      };
      players.push(playerInfo);
    }
    return players;
  } else {
    const playerInfo = { time: "0:0", moves: 0 };
    return Object.entries(playerInfo);
  }
};

export default playersCreater;
