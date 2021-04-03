const hourDisplay = document.querySelector(".hour");
const minuteDisplay = document.querySelector(".minute");
const secondDisplay = document.querySelector(".second");

const updateDigitalClock = () => {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  hourDisplay.innerText = `${hours}`.padStart(2, "0");
  minuteDisplay.innerText = `${minutes}`.padStart(2, "0");
  secondDisplay.innerText = `${seconds}`.padStart(2, "0");
};

updateDigitalClock();
setInterval(updateDigitalClock, 1000);
