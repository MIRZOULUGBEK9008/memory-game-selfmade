import iconsNames from "./icons-names.js";
import shuffleElements from "./shuffle-elements.js";
const getElements = ({ theme, gridSize, numberOfPlayers, activePlayer }) => {
  const icons = [];
  const numbers = [];

  const size = Number(gridSize);

  for (let i = 0; i < size * (size / 2); i++) {
    let randomNumber = Math.floor(Math.random() * 99) + 1;
    let randomIndex = Math.floor(Math.random() * iconsNames.length);

    while (
      numbers.includes(randomNumber) ||
      icons.includes(iconsNames[randomIndex])
    ) {
      randomNumber = Math.floor(Math.random() * 99) + 1;
      randomIndex = Math.floor(Math.random() * iconsNames.length);
    }

    numbers.push(randomNumber, randomNumber);
    icons.push(iconsNames[randomIndex], iconsNames[randomIndex]);
  }

  if (theme === "icons") {
    const result = shuffleElements(icons);
    return { result, theme, gridSize, numberOfPlayers, activePlayer };
  } else {
    const result = shuffleElements(numbers);
    return { result, theme, gridSize, numberOfPlayers, activePlayer };
  }
};

export default getElements;
