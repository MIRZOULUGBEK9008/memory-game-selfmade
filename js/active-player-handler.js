import cssClassModifiers from "./css-class-modifiers.js";
import { elGamePlayerStatusTemplate, elGameStatus } from "./html-elements.js";

const { gameStatusCardActive } = cssClassModifiers;

const fragmentStatus = document.createDocumentFragment();

const activePlayerHandler = (
  numberOfPlayers,
  activePlayer,
  playersOrPlayer
) => {
  elGameStatus.innerHTML = null;
  playersOrPlayer.forEach((player, index) => {
    const elCardClone = elGamePlayerStatusTemplate.content.cloneNode(true);
    const elCard = elCardClone.getElementById("statusCard");
    const elDetail = elCardClone.getElementById("statusDescriptionDetail");
    const elTerm = elCardClone.getElementById("statusDescriptionTerm");

    if (index + 1 === activePlayer && numberOfPlayers > 1) {
      elCard.classList.add(gameStatusCardActive);
    }

    if (numberOfPlayers > 1) {
      const { playerName, playerScore } = player;
      elTerm.innerText = playerName;
      elDetail.innerText = playerScore;
    } else {
      const [key, value] = player;
      elTerm.innerText = key;
      elDetail.innerText = value;
    }
    fragmentStatus.appendChild(elCardClone);
  });

  // Add status to DOM
  elGameStatus.append(fragmentStatus);
};

export default activePlayerHandler;
