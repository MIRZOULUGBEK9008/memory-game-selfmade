import cssClassModifiers from "./css-class-modifiers.js";
import displayGameResult from "./display-game-result.js";
import gameSettingsModal from "./game-settings-modal.js";
import gameSettingsUpdater from "./game-settings-updater.js";
import gameSettings from "./game-settings.js";
import getElements from "./get-elements.js";
import {
  elGameRestartButtons,
  elGameNewGameButtons,
  elGameSettings,
} from "./html-elements.js";
import loader from "./loader.js";
import playerCreater from "./player-creater.js";
import uiUpdater from "./ui-updater.js";

// CSS Modifiers
const { timeoutLoading } = cssClassModifiers;

// Loader
window.onload = () => {
  loader(false);
};

// Get Game Settings ans start game
elGameSettings.onsubmit = (e) => {
  e.preventDefault();
  loader(true);

  // Update settings
  gameSettings.gameSettingsUpdater = gameSettingsUpdater();

  const elements = getElements(gameSettings.finalGameSettings);
  const playersOrPlayer = playerCreater(elements);
  uiUpdater(elements, playersOrPlayer);
  gameSettingsModal(false);
  setTimeout(() => {
    loader(false);
  }, timeoutLoading);
};

// Restart Game
elGameRestartButtons.forEach((restartButton) => {
  restartButton.onclick = () => {
    const result = confirm("Do you want to restart the game ?");
    if (result) {
      loader(true);
      displayGameResult(false);
      const elements = getElements(gameSettings.finalGameSettings);
      const playersOrPlayer = playerCreater(elements);
      uiUpdater(elements, playersOrPlayer);
      setTimeout(() => {
        loader(false);
      }, timeoutLoading);
    }
  };
});

// New Game
elGameNewGameButtons.forEach((newGameButton) => {
  newGameButton.onclick = () => {
    const result = confirm("Are you ready to start a new game ?");
    if (result) {
      loader(true);
      displayGameResult(false);
      setTimeout(() => {
        loader(false);
        gameSettingsModal(true);
      }, timeoutLoading);
    }
  };
});
