import cssClassModifiers from "./css-class-modifiers.js";
import currentActions from "./current-actions.js";
import gameActions from "./game-actions.js";
import {
  elGameGrid,
  elGameGridIconTemplate,
  elGameGridNumberTemplate,
  elGamePlayerStatusTemplate,
  elGameStatus,
} from "./html-elements.js";
import singlePlayerTimer from "./single-player-timer.js";

const { gridSize_4, gridSize_6, gameStatusCardActive, timeoutLoading } =
  cssClassModifiers;

const uiCleaner = () => {
  elGameGrid.innerHTML = null;
  elGameStatus.innerHTML = null;
  elGameGrid.classList.remove(gridSize_4, gridSize_6);
  currentActions.length = 0;
};

const uiUpdater = (
  { result: elements, theme, gridSize, numberOfPlayers, activePlayer },
  playersOrPlayer
) => {
  const fragmentElements = document.createDocumentFragment();
  const fragmentPlayers = document.createDocumentFragment();

  // Clean UI
  uiCleaner();

  // Run timer
  if (numberOfPlayers === "1") {
    setTimeout(() => {
      const result = confirm("Are you ready to start ?");
      if (result) singlePlayerTimer(true);
    }, 1500);
  }

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

    elGridButton.onclick = ({ target }) => gameActions(target, numberOfPlayers);

    fragmentElements.appendChild(elElementClone);
  });

  // Players, player
  playersOrPlayer.forEach((element, index) => {
    const elCardClone = elGamePlayerStatusTemplate.content.cloneNode(true);
    const elStatusCard = elCardClone.getElementById("statusCard");
    const elDescriptionTerm = elCardClone.getElementById(
      "statusDescriptionTerm"
    );
    const elDescriptionDetail = elCardClone.getElementById(
      "statusDescriptionDetail"
    );

    const currentNumber = index + 1;

    if (numberOfPlayers !== "1") {
      if (Number(activePlayer) === currentNumber) {
        elStatusCard.classList.add(gameStatusCardActive);
      }
      elDescriptionTerm.innerText = element.name;
      elDescriptionDetail.innerText = element.pair;
      elStatusCard.dataset.playerNumber = currentNumber;
    } else {
      const [key, value] = element;
      elDescriptionTerm.innerText = key;
      elDescriptionDetail.innerText = value;
      elStatusCard.dataset[key] = value;
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
