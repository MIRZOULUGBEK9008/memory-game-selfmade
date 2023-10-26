import gameSettingsModal from "./game-settings-modal.js";
import gameSettingsUpdater from "./game-settings-updater.js";
import gameSettings from "./game-settings.js";
import { elGameSettings } from "./html-elements.js";
import loader from "./loader.js";

// Loader
window.onload = () => {
  loader(false);
  gameSettingsModal(true);
};

// Get Game Settings
elGameSettings.onsubmit = (e) => {
  e.preventDefault();
  gameSettings.gameSettingsUpdater = gameSettingsUpdater();
  console.log(gameSettings.finalGameSettings);
  gameSettingsModal(false);
};
