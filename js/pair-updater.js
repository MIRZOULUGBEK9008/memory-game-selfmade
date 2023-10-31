import cssClassModifiers from "./css-class-modifiers.js";

const { gameStatusCardActive } = cssClassModifiers;

const pairUpdater = (next, value) => {
  let active;
  const elPairs = document.querySelectorAll(".js-game-status");

  elPairs.forEach((pair) => {
    if (pair.classList.contains(gameStatusCardActive)) {
      active = pair;
      next && pair.classList.remove(gameStatusCardActive);
    }
  });

  if (next) {
    if (active?.nextElementSibling) {
      active.nextElementSibling.classList.add(gameStatusCardActive);
    } else {
      elPairs[0].classList.add(gameStatusCardActive);
    }
  }

  // Add pair
  if (value) {
    const elDescriptionDetail = active.querySelector(
      "#statusDescriptionDetail"
    );
    elDescriptionDetail.innerText = Number(elDescriptionDetail.innerText) + 1;
  }
};

export default pairUpdater;
