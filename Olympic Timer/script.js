function formatDate(date) {
  const weekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months = [
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

  return `${weekDays[date.getDay()]}, ${date.getDate()} ${
    months[date.getMonth()]
  } ${date.getFullYear()} ${String(date.getHours()).padStart(2, "0")}:${String(
    date.getMinutes()
  ).padStart(2, "0")}:${String(date.getSeconds()).padStart(2, "0")}`;
}

const openingDateIST = new Date("2028-07-14T05:30:00+05:30");

const dateNTime = document.getElementById("dateNTime");
dateNTime.innerHTML = formatDate(openingDateIST);

function currentTime() {
  const headerRight = document.getElementsByClassName("right");
  const todayDate = new Date();
  headerRight[0].innerHTML = todayDate.toLocaleTimeString();
}

setInterval(currentTime, 1000);

function timeLeftForEvent() {
  const eventDate = new Date("2028-07-14T05:30:00+05:30");
  const now = new Date();

  const diffMs = eventDate - now; // in Milliseconds
  console.log(diffMs);

  const days = Math.floor(diffMs / (1000 * 24 * 60 * 60));
  const hours = Math.floor((diffMs % (1000 * 24 * 60 * 60)) / (1000 * 60 * 60));
  const minutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diffMs % (1000 * 60)) / 1000);

  const daysElem = document.getElementById("days");
  daysElem.innerHTML = days;

  const hoursElem = document.getElementById("hours");
  hoursElem.innerHTML = hours;

  const minElem = document.getElementById("minutes");
  minElem.innerHTML = minutes;

  const secElem = document.getElementById("seconds");
  secElem.innerHTML = seconds;
}

setInterval(timeLeftForEvent, 1000);
