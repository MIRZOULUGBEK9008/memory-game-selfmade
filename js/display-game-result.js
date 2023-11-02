import cssClassModifiers from "./css-class-modifiers.js";
import {
  elGameResultModal,
  elGameResultTemplate,
  elGameResults,
  elGameResultTitle,
} from "./html-elements.js";

const {
  gameResultBlock,
  gameResultOpacity,
  gameResultPlayerWinner,
  timeoutAction,
} = cssClassModifiers;

// Result collector
const resultCollector = () => {
  const elCards = document.querySelectorAll(".js-game-status");

  const gameResults = [];

  elCards.forEach((card) => {
    const elDescriptionTerm = card.querySelector("#statusDescriptionTerm");
    const elDescriptionDetail = card.querySelector("#statusDescriptionDetail");

    const playerData = {
      name: elDescriptionTerm.innerText,
      pair: Number(elDescriptionDetail.innerText),
    };

    gameResults.push(playerData);
  });

  return gameResults.sort((a, b) => b.pair - a.pair);
};

const displayGameResult = (value = false) => {
  elGameResults.innerHTML = null;
  if (value) {
    const results = resultCollector();
    const maxPair = results[0]["pair"];
    let winnerCounter = 0;
    let winnerName = "";
    const fragmentResults = document.createDocumentFragment();

    results.forEach(({ name, pair }) => {
      const elResultClone = elGameResultTemplate.content.cloneNode(true);
      const elPlayerResult = elResultClone.getElementById("gamePlayerResult");
      const elName = elResultClone.getElementById(
        "gamePlayerResultDescriptionTerm"
      );
      const elPair = elResultClone.getElementById(
        "gamePlayerResultDescriptionDetail"
      );

      if (pair === maxPair) {
        elPlayerResult.classList.add(gameResultPlayerWinner);
        winnerCounter++;
        winnerName = name;
      }

      elName.innerText = name;
      elPair.innerText = `${pair} Pairs`;

      fragmentResults.appendChild(elResultClone);
    });

    if (winnerCounter > 1) {
      elGameResultTitle.innerText = "It’s a tie!";
    } else {
      elGameResultTitle.innerText = `${winnerName} Wins!`;
    }

    elGameResults.append(fragmentResults);
    elGameResultModal.classList.add(gameResultBlock);
    setTimeout(() => {
      elGameResultModal.classList.add(gameResultOpacity);
    }, timeoutAction);
  } else elGameResultModal.classList.remove(gameResultOpacity, gameResultBlock);
};

export default displayGameResult;
