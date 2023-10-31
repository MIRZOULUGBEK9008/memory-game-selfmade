import cssClassModifiers from "./css-class-modifiers.js";
import currentActions from "./current-actions.js";

const { gameGridItemActive, gameGridItemPassed, timeoutAction } =
  cssClassModifiers;

const gameActions = (target) => {
  target.parentElement.classList.add(gameGridItemActive);

  currentActions.push(target);

  if (currentActions.length === 2) {
    const [firstAction, secondAction] = currentActions;
    currentActions.forEach((element) => {
      setTimeout(() => {
        element.parentElement.classList.remove(gameGridItemActive);
      }, timeoutAction);

      // Compare actions
      if (firstAction.dataset.element === secondAction.dataset.element) {
        element.parentElement.classList.add(gameGridItemPassed);
      }
    });

    // Clear actions
    currentActions.length = 0;
  }
};

export default gameActions;
