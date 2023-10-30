import actions from "./actions.js";
import activePlayerHandler from "./active-player-handler.js";
import cssClassModifiers from "./css-class-modifiers.js";
import gameSettings from "./game-settings.js";

const { gameGridItemActive, gameGridItemPassed, timeoutAction } =
  cssClassModifiers;

let activePlayer = 1;

// let numberOfPlayers = Number(gameSettings.finalGameSettings.numberOfPlayers);

const gameActions = ({ target }) => {
  target.parentElement.classList.add(gameGridItemActive);
  actions.push(target);
  const [first, second] = actions;
  if (
    actions.length === 2 &&
    first.dataset.element === second.dataset.element
  ) {
    actions.forEach((action) => {
      setTimeout(() => {
        action.parentElement.classList.remove(gameGridItemActive);
        action.parentElement.classList.add(gameGridItemPassed);
      }, timeoutAction);
    });
  } else if (actions.length === 2) {
    actions.forEach((action) => {
      setTimeout(() => {
        if (!action.parentElement.classList.contains(gameGridItemPassed)) {
          action.parentElement.classList.remove(gameGridItemActive);
        }
      }, timeoutAction);
    });
  }

  // Clean actions
  if (actions.length === 2) {
    if (
      // Because of Bug ❌
      activePlayer.toString() === gameSettings.finalGameSettings.numberOfPlayers
    ) {
      activePlayer = 1;
    } else activePlayer++;
    setTimeout(() => {
      activePlayerHandler(
        gameSettings.finalGameSettings.numberOfPlayers,
        activePlayer
      );
    }, timeoutAction);
    actions.length = 0;
  }
};

export default gameActions;
