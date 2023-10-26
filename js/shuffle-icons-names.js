const shuffleIconsNames = (iconsNames) => {
  for (let i = iconsNames.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [iconsNames[i], iconsNames[j]] = [iconsNames[j], iconsNames[i]];
  }
  return iconsNames;
};

export default shuffleIconsNames;
