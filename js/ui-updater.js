import actions from "./actions.js";
import cssClassModifiers from "./css-class-modifiers.js";
import {
  elGameGrid,
  elGameGridIconTemplate,
  elGameGridNumberTemplate,
  elGamePlayerStatusTemplate,
  elGameStatus,
} from "./html-elements.js";
import playersCreater from "./players.js";

const { gridSize_4, gridSize_6, gameStatusCardActive } = cssClassModifiers;

const uiCleaner = () => {
  elGameGrid.innerHTML = null;
  elGameStatus.innerHTML = null;
  elGameGrid.classList.remove(gridSize_4, gridSize_6);
  actions.length = 0;
};

const uiUpdater = ({ result: elements, theme, gridSize, numberOfPlayers }) => {
  const fragmentElements = document.createDocumentFragment();
  const fragmentStatus = document.createDocumentFragment();
  uiCleaner();
  if (gridSize === "6") {
    elGameGrid.classList.add(gridSize_6);
  } else elGameGrid.classList.add(gridSize_4);

  elements.forEach((element) => {
    if (theme === "icons") {
      const elementClone = elGameGridIconTemplate.content.cloneNode(true);
      const elGridItem = elementClone.getElementById("gridItem");
      const elGridButton = elGridItem.querySelector(".game-grid__button");
      const icon = elementClone.getElementById("icon");
      icon.classList.add(`fa-${element}`);
      elGridButton.dataset.element = element;
      fragmentElements.appendChild(elementClone);
    } else {
      const elementClone = elGameGridNumberTemplate.content.cloneNode(true);
      const elGridItem = elementClone.getElementById("gridItem");
      const elGridButton = elGridItem.querySelector(".game-grid__button");
      const number = elementClone.getElementById("number");
      number.innerText = element;
      elGridButton.dataset.element = element;
      fragmentElements.appendChild(elementClone);
    }
  });

  // Status
  const playersOrPlayer = playersCreater(numberOfPlayers);
  playersOrPlayer.forEach((player, index) => {
    const elCardClone = elGamePlayerStatusTemplate.content.cloneNode(true);
    const elCard = elCardClone.getElementById("statusCard");
    const elDetail = elCardClone.getElementById("statusDescriptionDetail");
    const elTerm = elCardClone.getElementById("statusDescriptionTerm");

    if (index === 0) {
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

  // Add element to DOM
  elGameGrid.append(fragmentElements);
};

export default uiUpdater;
