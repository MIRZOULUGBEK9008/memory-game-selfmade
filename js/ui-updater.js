import {
  elGameGrid,
  elGameGridIcon,
  elGameGridNumber,
} from "./html-elements.js";

const uiUpdater = ({ result: elements, theme, gridSize }) => {
  elements.forEach((element) => {
    if (theme === "icons") {
      const elementClone = elGameGridIcon.content.cloneNode(true);
      const icon = elementClone.getElementById("icon");
      icon.alt = element;
      icon.src = location.origin + `/img/icons/${icon.alt}.svg`;
      elGameGrid.appendChild(elementClone);
      console.log(icon.alt, icon);
    } else {
      const elementClone = elGameGridNumber.content.cloneNode(true);
      console.log(elementClone);
    }
  });
};

export default uiUpdater;
