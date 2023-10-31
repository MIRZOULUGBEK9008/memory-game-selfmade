import cssClassModifiers from "./css-class-modifiers.js";
import gameActions from "./game-actions.js";
import {
  elGameGrid,
  elGameGridIconTemplate,
  elGameGridNumberTemplate,
  elGamePlayerStatusTemplate,
  elGameStatus,
} from "./html-elements.js";

const { gridSize_4, gridSize_6, gameStatusCardActive } = cssClassModifiers;

const uiCleaner = () => {
  elGameGrid.innerHTML = null;
  elGameStatus.innerHTML = null;
  elGameGrid.classList.remove(gridSize_4, gridSize_6);
};

const uiUpdater = (
  { result: elements, theme, gridSize, numberOfPlayers, activePlayer },
  playersOrPlayer
) => {
  const fragmentElements = document.createDocumentFragment();
  const fragmentPlayers = document.createDocumentFragment();

  // Clean UI
  uiCleaner();

  // Elements
  elements.forEach((element) => {
    // Templates
    const { number, icon } = {
      number: elGameGridNumberTemplate.content.cloneNode(true),
      icon: elGameGridIconTemplate.content.cloneNode(true),
    };

    const elElementClone = theme === "icons" ? icon : number;

    const elGridItem = elElementClone.getElementById("gridItem");
    const elGridButton = elGridItem.querySelector(".game-grid__button");

    if (theme === "icons") {
      const elIcon = elElementClone.getElementById("icon");
      elIcon.classList.add(`fa-${element}`);
    } else {
      const elNumber = elElementClone.getElementById("number");
      elNumber.innerText = element;
    }

    elGridButton.dataset.element = element;

    elGridButton.onclick = ({ target }) => gameActions(target);

    fragmentElements.appendChild(elElementClone);
  });

  // Players, player
  playersOrPlayer.forEach((element, index) => {
    const elCardClone = elGamePlayerStatusTemplate.content.cloneNode(true);
    const elDescriptionTerm = elCardClone.getElementById(
      "statusDescriptionTerm"
    );
    const elDescriptionDetail = elCardClone.getElementById(
      "statusDescriptionDetail"
    );

    if (numberOfPlayers !== "1") {
      if (Number(activePlayer) === index + 1) {
        const elStatusCard = elCardClone.getElementById("statusCard");
        elStatusCard.classList.add(gameStatusCardActive);
      }
      elDescriptionTerm.innerText = element.name;
      elDescriptionDetail.innerText = element.pair;
    } else {
      const [key, value] = element;
      elDescriptionTerm.innerText = key;
      elDescriptionDetail.innerText = value;
    }
    fragmentPlayers.appendChild(elCardClone);
  });
  // Set grid size
  if (gridSize === "6") {
    elGameGrid.classList.add(gridSize_6);
  } else elGameGrid.classList.add(gridSize_4);

  // Add element to DOM
  elGameGrid.append(fragmentElements);

  // Add status cards to DOM
  elGameStatus.append(fragmentPlayers);
};

export default uiUpdater;
