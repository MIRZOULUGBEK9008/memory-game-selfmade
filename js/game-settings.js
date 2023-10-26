const gameSettings = {
  // Default settings
  theme: "numbers",
  numberOfPlayers: 1,
  gridSize: 4,

  // Set settings
  set setTheme(value) {
    this.theme = value;
  },
  set setNumberOfPlayers(value) {
    this.numberOfPlayers = value;
  },
  set setGridSize(value) {
    this.gridSize = value;
  },

  // Get final settings
  get getFinalSettings() {
    const { theme, numberOfPlayers, gridSize } = this;
    return { theme, numberOfPlayers, gridSize };
  },
};

export default gameSettings;
