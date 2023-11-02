let currentTime = "";
const singlePlayerTimer = (value) => {
  const elTime = document
    .querySelector("[data-time]")
    .querySelector("#statusDescriptionDetail");
  let seconds = 0;
  let minutes = 0;
  if (value) {
    setInterval(() => {
      elTime.innerText = minutes + ":" + seconds.toString().padStart(2, "0");
      currentTime = elTime.innerText;
      seconds++;
      if (seconds > 59) {
        seconds = 0;
        minutes++;
      }
      if (minutes > 59) location.reload();
    }, 1000);
  } else return currentTime;
};
export default singlePlayerTimer;
