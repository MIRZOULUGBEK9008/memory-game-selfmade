import cssClassModifiers from "./css-class-modifiers.js";
import currentActions from "./current-actions.js";
import pairUpdater from "./pair-updater.js";

const { gameGridItemActive, gameGridItemPassed, timeoutAction } =
  cssClassModifiers;

const gameActions = (target, numberOfPlayers) => {
  target.parentElement.classList.add(gameGridItemActive);

  currentActions.push(target);

  if (currentActions.length === 2) {
    const [firstAction, secondAction] = currentActions;
    const resultActions =
      firstAction.dataset.element === secondAction.dataset.element;
    // Compare actions

    currentActions.forEach((element) => {
      if (resultActions) {
        element.parentElement.classList.add(gameGridItemPassed);
      }
      setTimeout(() => {
        element.parentElement.classList.remove(gameGridItemActive);
      }, timeoutAction);
    });

    setTimeout(() => {
      if (numberOfPlayers !== "1") {
        if (resultActions) pairUpdater(false, true);
        else pairUpdater(true, false);
      }
    }, timeoutAction);

    // Clear actions
    currentActions.length = 0;
  }
};

export default gameActions;
