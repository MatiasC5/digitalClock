const clock = document.querySelector(".clock");
const date = document.querySelector(".date");

const currentDate = new Date();

let hours = currentDate.getHours();
let minutes = currentDate.getMinutes();
let seconds = currentDate.getSeconds();

const day = currentDate.getDate();
const month = currentDate.getMonth();
const year = currentDate.getFullYear();

const dayName = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const monthName = [
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

setInterval(() => {
  setClock();
}, 1000);

function setClock() {
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
  const dayOfWeek = `${dayName[day]}, ${monthName[month]} ${day}, ${year}`;

  clock.innerHTML = currentTime;
  date.innerHTML = dayOfWeek;
}

setClock();
