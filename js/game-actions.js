import cssClassModifiers from "./css-class-modifiers.js";
import currentActions from "./current-actions.js";
import displayGameResult from "./display-game-result.js";
import isGameEnd from "./is-game-end.js";
import pairUpdater from "./pair-updater.js";
import singlePlayerTimer from "./single-player-timer.js";

const { gameGridItemActive, gameGridItemPassed, timeoutAction } =
  cssClassModifiers;

const gameActions = (target, numberOfPlayers) => {
  target.parentElement.classList.add(gameGridItemActive);

  currentActions.push(target);

  // Run single player timer and calculate moves
  if (numberOfPlayers === "1") {
    const elMoves = document
      .querySelector("[data-moves]")
      .querySelector("#statusDescriptionDetail");
    if (currentActions.length === 2) {
      elMoves.innerText = Number(elMoves.innerText) + 1;
    }
    if (Number(elMoves.innerText) > 144) location.reload();

    if (isGameEnd()) {
      alert("Your time: ", singlePlayerTimer(false));
      location.reload();
    }
  }

  if (currentActions.length === 2) {
    const [firstAction, secondAction] = currentActions;
    // Compare actions
    const resultActions =
      firstAction.dataset.element === secondAction.dataset.element;

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

        // Is game end
        if (isGameEnd()) {
          setTimeout(() => displayGameResult(true), timeoutAction);
        }
      }
    }, timeoutAction);

    // Clear actions
    currentActions.length = 0;
  }
};

export default gameActions;
