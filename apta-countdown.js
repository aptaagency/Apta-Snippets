const countdownWrapper = document.querySelector("[ap-countdown-wrapper]");
const countDownDate = new Date(
  countdownWrapper.getAttribute("ap-countdown-date")
).getTime();
const countdownDay = document.querySelector("[ap-countdown-day]");
const countdownHour = document.querySelector("[ap-countdown-hour]");
const countdownMin = document.querySelector("[ap-countdown-min]");
const countdownSec = document.querySelector("[ap-countdown-sec]");

let x = setInterval(function () {
  let now = new Date().getTime();

  let distance = countDownDate - now;

  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  countdownDay.textContent = days;
  countdownHour.textContent = hours;
  countdownMin.textContent = minutes;
  countdownSec.textContent = seconds;

  if (distance < 0) {
    clearInterval(x);
    countdownDay.textContent = 0;
    countdownHour.textContent = 0;
    countdownMin.textContent = 0;
    countdownSec.textContent = 0;
  }
}, 1000);
