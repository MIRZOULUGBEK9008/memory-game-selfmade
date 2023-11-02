const elLoader = document.getElementById("loader"),
  elGameSettings = document.getElementById("gameSettings"),
  elGameSettingsModal = document.getElementById("gameSettingsModal"),
  elGameSettingsSubmitButton = document.getElementById(
    "gameSettingsSubmitButton"
  ),
  elGameRestartButtons = document.querySelectorAll(".js-restart-game"),
  elGameNewGameButtons = document.querySelectorAll(".js-new-game"),
  elGameGrid = document.getElementById("gameGrid"),
  elGameGridIconTemplate = document.getElementById("gameGridIconTemplate"),
  elGameGridNumberTemplate = document.getElementById("gameGridNumberTemplate"),
  elGamePlayerStatusTemplate = document.getElementById(
    "gamePlayerStatusTemplate"
  ),
  elGameStatus = document.getElementById("gameStatus"),
  elGameResultTitle = document.getElementById("gameResultTitle"),
  elGameResultModal = document.getElementById("gameResultModal"),
  elGameResults = document.getElementById("gameResults"),
  elGameResultTemplate = document.getElementById("gameResultTemplate");

export {
  elLoader,
  elGameSettings,
  elGameSettingsModal,
  elGameSettingsSubmitButton,
  elGameRestartButtons,
  elGameNewGameButtons,
  elGameGrid,
  elGameGridIconTemplate,
  elGameGridNumberTemplate,
  elGameStatus,
  elGamePlayerStatusTemplate,
  elGameResultModal,
  elGameResultTitle,
  elGameResults,
  elGameResultTemplate,
};
