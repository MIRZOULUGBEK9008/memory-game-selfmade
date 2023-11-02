import cssClassModifiers from "./css-class-modifiers.js";
import currentActions from "./current-actions.js";
import displayGameResult from "./display-game-result.js";
import isGameEnd from "./is-game-end.js";
import pairUpdater from "./pair-updater.js";

const { gameGridItemActive, gameGridItemPassed, timeoutAction } =
  cssClassModifiers;

const gameActions = (target, numberOfPlayers) => {
  target.parentElement.classList.add(gameGridItemActive);

  currentActions.push(target);

  if (currentActions.length === 2) {
    const [firstAction, secondAction] = currentActions;
    // Compare actions
    const resultActions =
      firstAction.dataset.element === secondAction.dataset.element;

    currentActions.forEach((element) => {
      if (resultActions) {
        element.parentElement.classList.add(gameGridItemPassed);
        // Is game end
      }
      setTimeout(() => {
        element.parentElement.classList.remove(gameGridItemActive);
      }, timeoutAction);
    });

    setTimeout(() => {
      if (numberOfPlayers !== "1") {
        if (resultActions) pairUpdater(false, true);
        else pairUpdater(true, false);

        // Is game end
        isGameEnd() && displayGameResult(true);
      }
    }, timeoutAction);

    // Clear actions
    currentActions.length = 0;
  }
};

export default gameActions;
