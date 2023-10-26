import { elGameSettings } from "./html-elements.js";

const gameSettingsUpdater = () => {
  const settings = new FormData(elGameSettings);
  const finalGameSettings = {};
  for (const [key, value] of settings.entries()) {
    finalGameSettings[key] = value;
  }
  return finalGameSettings;
};

export default gameSettingsUpdater;
