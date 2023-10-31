const gameSettings = {
  // Default settings
  theme: "numbers",
  numberOfPlayers: "1",
  gridSize: "4",
  activePlayer: "1",

  // Update settings
  set gameSettingsUpdater({ theme, numberOfPlayers, gridSize }) {
    this.theme = theme;
    this.numberOfPlayers = numberOfPlayers;
    this.gridSize = gridSize;
  },

  get finalGameSettings() {
    const { theme, numberOfPlayers, gridSize, activePlayer } = this;
    return { theme, numberOfPlayers, gridSize, activePlayer };
  },
};

export default gameSettings;
