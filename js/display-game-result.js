import cssClassModifiers from "./css-class-modifiers.js";
import { elGameResultModal } from "./html-elements.js";

const { gameResultBlock, gameResultOpacity } = cssClassModifiers;

const displayGameResult = (value = false) => {
  if (value) {
    elGameResultModal.classList.add(gameResultBlock);
    setTimeout(() => {
      elGameResultModal.classList.add(gameResultOpacity);
    }, 100);
    elGameResultModal.ontransitionstart = () => {};
  } else {
    elGameResultModal.classList.remove(gameResultOpacity);
    elGameResultModal.ontransitionend = () => {
      elGameResultModal.classList.remove(gameResultBlock);
    };
  }
};

export default displayGameResult;
