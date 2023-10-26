import iconsNames from "./icons-names.js";
import shuffleElements from "./shuffle-elements.js";
const getElements = ({ theme, gridSize }) => {
  const icons = [];
  const numbers = [];

  for (let i = 0; i < gridSize * (gridSize / 2); i++) {
    let randomNumber = Math.floor(Math.random() * 100) + 1;
    let randomIndex = Math.floor(Math.random() * iconsNames.length);

    while (
      numbers.includes(randomNumber) ||
      icons.includes(iconsNames[randomIndex])
    ) {
      randomNumber = Math.floor(Math.random() * 100) + 1;
      randomIndex = Math.floor(Math.random() * iconsNames.length);
    }

    numbers.push(randomNumber, randomNumber);
    icons.push(iconsNames[randomIndex], iconsNames[randomIndex]);
  }

  if (theme === "icons") {
    return shuffleElements(icons);
  } else return shuffleElements(numbers);
};

export default getElements;
