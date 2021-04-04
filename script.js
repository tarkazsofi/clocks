const hourDisplay = document.querySelector(".hour");
const minuteDisplay = document.querySelector(".minute");
const secondDisplay = document.querySelector(".second");
const hourHand = document.querySelector(".hourHand");
const minuteHand = document.querySelector(".minuteHand");
const secondHand = document.querySelector(".secondHand");

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

const updateAnalogClock = () => {
  const now = new Date();
  const hours = now.getHours() % 12;
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  const secondsRotation = seconds * (360 / 60);
  const minuteRotation = minutes * (360 / 60) + seconds * (360 / (60 * 60));
  const hourRotation = hours * (360 / 12) + minutes * (360 / (12 * 60));

  secondHand.style.transform = `rotate(${secondsRotation}deg)`;
  minuteHand.style.transform = `rotate(${minuteRotation}deg)`;
  hourHand.style.transform = `rotate(${hourRotation}deg)`;
};

updateAnalogClock();
setInterval(updateAnalogClock, 1000);
