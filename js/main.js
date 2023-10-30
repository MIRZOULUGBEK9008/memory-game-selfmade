import cssClassModifiers from "./css-class-modifiers.js";
import gameActions from "./game-actions.js";
import gameSettingsModal from "./game-settings-modal.js";
import gameSettingsUpdater from "./game-settings-updater.js";
import gameSettings from "./game-settings.js";
import getElements from "./get-elements.js";
import {
  elGameNewGameButton,
  elGameRestartButton,
  elGameSettings,
} from "./html-elements.js";
import loader from "./loader.js";
import playersCreater from "./players-creater.js";
import uiUpdater from "./ui-updater.js";

let elements;

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
  gameSettings.gameSettingsUpdater = gameSettingsUpdater();
  const playersOrPlayer = playersCreater(
    gameSettings.finalGameSettings.numberOfPlayers
  );
  elements = getElements(gameSettings.finalGameSettings);
  uiUpdater(elements, playersOrPlayer);
  gameSettingsModal(false);
  setTimeout(() => {
    loader(false);
  }, timeoutLoading);
};

// Restart Game
elGameRestartButton.onclick = () => {
  const result = confirm("Do you want to restart the game ?");
  if (result) {
    loader(true);
    setTimeout(() => {
      elements = getElements(gameSettings.finalGameSettings);
      uiUpdater(elements);
      loader(false);
    }, timeoutLoading);
  }
};

// New Game
elGameNewGameButton.onclick = () => {
  const result = confirm("Are you ready to start a new game ?");
  if (result) {
    loader(true);
    setTimeout(() => {
      gameSettingsModal(true);
      loader(false);
    }, timeoutLoading);
  }
};

// Game Actions
document.onclick = (e) => {
  if (e.target.classList.contains("game-grid__button")) {
    gameActions(e);
  }
};
