const clock = document.querySelector(".clock");

const day = document.getElementById("day");
const month = document.getElementById("month");
const year = document.getElementById("year");

const currentDate = new Date();

let hours = currentDate.getHours();
let minutes = currentDate.getMinutes();
let seconds = currentDate.getSeconds();

const dayNames = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const daysWeek = dayNames[currentDate.getDay()];
const monthName = monthNames[currentDate.getMonth()];
function currentTime() {
  month.textContent = `${monthName} ${currentDate.getMonth() + 1},`;
  currentDate.getMonth() + 1;
  year.textContent = currentDate.getFullYear();

  seconds++;
  if (seconds >= 60) {
    seconds = 0;
    minutes++;
  }
  if (minutes >= 60) {
    minutes = 0;
    hours++;
  }
  if (hours >= 24) {
    hours = 0;
  }
  seconds < 10 ? (seconds = `0${seconds}`) : (seconds = `${seconds}`);
  minutes < 10 ? (minutes = `0${minutes}`) : (minutes = `${minutes}`);
  hours < 10 ? (hours = `0${hours}`) : (hours = `${hours}`);
  let currentTime = `${hours} : ${minutes} : ${seconds}`;

  clock.innerHTML = currentTime;
}

setInterval(() => {
  currentTime();
}, 1000);
currentTime();
