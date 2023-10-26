const gameSettings = {
  // Default settings
  theme: "numbers",
  numberOfPlayers: 1,
  gridSize: 4,

  // Update settings
  set gameSettingsUpdater({ theme, numberOfPlayers, gridSize }) {
    this.theme = theme;
    this.numberOfPlayers = numberOfPlayers;
    this.gridSize = gridSize;
  },

  get finalGameSettings() {
    const { theme, numberOfPlayers, gridSize } = this;
    return { theme, numberOfPlayers, gridSize };
  },
};

export default gameSettings;
