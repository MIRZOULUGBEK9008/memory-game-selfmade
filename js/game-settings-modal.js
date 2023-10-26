import cssClassModifiers from "./css-class-modifiers.js";
import { elGameSettingsModal } from "./html-elements.js";

// CSS class modifiers
const { gameSettingsModalOpacity, gameSettingsModalNone } = cssClassModifiers;

const gameSettingsModal = (value = true) => {
  if (value) {
    elGameSettingsModal.classList.remove(
      gameSettingsModalOpacity,
      gameSettingsModalNone
    );
  } else {
    elGameSettingsModal.classList.add(gameSettingsModalOpacity);
    elGameSettingsModal.ontransitionend = () => {
      elGameSettingsModal.classList.add(gameSettingsModalNone);
    };
  }
};

export default gameSettingsModal;
