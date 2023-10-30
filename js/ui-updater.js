import actions from "./actions.js";
import activePlayerHandler from "./active-player-handler.js";
import activePlayer from "./active-player.js";
import cssClassModifiers from "./css-class-modifiers.js";
import {
  elGameGrid,
  elGameGridIconTemplate,
  elGameGridNumberTemplate,
  elGameStatus,
} from "./html-elements.js";

const { gridSize_4, gridSize_6 } = cssClassModifiers;

const uiCleaner = () => {
  elGameGrid.innerHTML = null;
  elGameStatus.innerHTML = null;
  elGameGrid.classList.remove(gridSize_4, gridSize_6);
  actions.length = 0;
  activePlayer.setActive = 1;
};

const uiUpdater = ({ result: elements, theme, gridSize, numberOfPlayers }) => {
  const fragmentElements = document.createDocumentFragment();
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

  // Add element to DOM
  elGameGrid.append(fragmentElements);

  // Status
  activePlayerHandler(numberOfPlayers, activePlayer.player);
};

export default uiUpdater;
