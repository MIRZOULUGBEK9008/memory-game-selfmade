import cssClassModifiers from "./css-class-modifiers.js";

const { gameGridItemPassed } = cssClassModifiers;

const isGameEnd = () => {
  let checker = true;
  const elGridItems = document.querySelectorAll(".js-grid-item");
  elGridItems.forEach((item) => {
    if (!item.classList.contains(gameGridItemPassed)) checker = false;
  });

  return checker;
};

export default isGameEnd;
