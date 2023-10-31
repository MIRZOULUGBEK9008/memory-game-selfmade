import cssClassModifiers from "./css-class-modifiers.js";
import gameActions from "./game-actions.js";
import {
  elGameGrid,
  elGameGridIconTemplate,
  elGameGridNumberTemplate,
} from "./html-elements.js";

const { gridSize_4, gridSize_6 } = cssClassModifiers;

const uiCleaner = () => {
  elGameGrid.innerHTML = null;
  elGameGrid.classList.remove(gridSize_4, gridSize_6);
};

const uiUpdater = ({ result: elements, theme, gridSize }) => {
  const fragmentElements = document.createDocumentFragment();

  // Clean UI
  uiCleaner();

  elements.forEach((element) => {
    // Templates
    const { number, icon } = {
      number: elGameGridNumberTemplate.content.cloneNode(true),
      icon: elGameGridIconTemplate.content.cloneNode(true),
    };

    const elementClone = theme === "icons" ? icon : number;

    const elGridItem = elementClone.getElementById("gridItem");
    const elGridButton = elGridItem.querySelector(".game-grid__button");

    if (theme === "icons") {
      const icon = elementClone.getElementById("icon");
      icon.classList.add(`fa-${element}`);
    } else {
      const number = elementClone.getElementById("number");
      number.innerText = element;
    }

    elGridButton.dataset.element = element;

    elGridButton.onclick = ({ target }) => gameActions(target);

    fragmentElements.appendChild(elementClone);
  });

  // Set grid size
  if (gridSize === "6") {
    elGameGrid.classList.add(gridSize_6);
  } else elGameGrid.classList.add(gridSize_4);

  // Add element to DOM
  elGameGrid.append(fragmentElements);
};

export default uiUpdater;
