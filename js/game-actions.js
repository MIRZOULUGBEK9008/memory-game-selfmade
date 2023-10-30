import actions from "./actions.js";
import activePlayerHandler from "./active-player-handler.js";
import activePlayer from "./active-player.js";
import cssClassModifiers from "./css-class-modifiers.js";
import gameSettings from "./game-settings.js";
import playersCreater from "./players-creater.js";

const { gameGridItemActive, gameGridItemPassed, timeoutAction } =
  cssClassModifiers;

const gameActions = ({ target }) => {
  target.parentElement.classList.add(gameGridItemActive);
  actions.push(target);
  const [first, second] = actions;

  // Clean actions
  if (actions.length === 2) {
    if (first.dataset.element === second.dataset.element) {
      actions.forEach((action) => {
        setTimeout(() => {
          action.parentElement.classList.remove(gameGridItemActive);
          action.parentElement.classList.add(gameGridItemPassed);
        }, timeoutAction);
      });
    } else {
      actions.forEach((action) => {
        setTimeout(() => {
          if (!action.parentElement.classList.contains(gameGridItemPassed)) {
            action.parentElement.classList.remove(gameGridItemActive);
          }
        }, timeoutAction);
      });
    }
    if (
      activePlayer.player.toString() ===
      gameSettings.finalGameSettings.numberOfPlayers
    ) {
      activePlayer.setActive = 1;
    } else activePlayer.setActive = activePlayer.player + 1;
    setTimeout(() => {
      const players = playersCreater(
        gameSettings.finalGameSettings.numberOfPlayers
      );
      activePlayerHandler(
        gameSettings.finalGameSettings.numberOfPlayers,
        activePlayer.player,
        players
      );
    }, timeoutAction);
    actions.length = 0;
  }
};

export default gameActions;
