import cssClassModifiers from "./css-class-modifiers.js";

const { gameGridItemActive, gameGridItemPassed } = cssClassModifiers;
const actions = [];
const gameActions = (
  {
    target: {
      dataset: { element },
    },
  },
  target
) => {
  target.parentElement.classList.add(gameGridItemActive);
  actions.push(target);
  console.log(actions);
  const [first, second] = actions;
  if (
    actions.length === 2 &&
    first.dataset.element === second.dataset.element
  ) {
    actions.forEach((action) => {
      setTimeout(() => {
        action.parentElement.classList.remove(gameGridItemActive);
        action.parentElement.classList.add(gameGridItemPassed);
      }, 300);
    });
  } else if (actions.length === 2) {
    actions.forEach((action) => {
      setTimeout(() => {
        if (!action.parentElement.classList.contains(gameGridItemPassed)) {
          action.parentElement.classList.remove(gameGridItemActive);
        }
      }, 300);
      console.log(action.classList);
    });
    console.log("Teng emas");
  }
  if (actions.length === 2) actions.length = 0;
};

export default gameActions;
