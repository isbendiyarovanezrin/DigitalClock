"use strict";

const time = document.getElementById("time");
const am_pm = document.getElementById("am-pm");
const fullDate = document.getElementById("full-date");
const days = document.getElementsByClassName("day");

function startClock() {
  const date = new Date();
  const hour = date.getHours();
  const min = date.getMinutes();
  const sec = date.getSeconds();
  const day = date.getDay();
  const currDate = date.getDate();
  const year = date.getFullYear();
  const month = date.getMonth();
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

  time.innerHTML = `${updateTime(hour)}:${updateTime(min)}:${updateTime(sec)}`;
  document.title = `${updateTime(hour)}:${updateTime(min)}:${updateTime(sec)}`;
  am_pm.innerHTML = hour >= 12 ? "PM" : "AM";
  fullDate.innerHTML = `${monthNames[month]} ${currDate} ${year}`;
  days[day].style.color = "var(--primary-color)";
}

function updateTime(t) {
  if (t < 10) {
    return "0" + t;
  } else {
    return t;
  }
}

setInterval(startClock, 1000);

// loader start
$(window).on("load", () => {
  setTimeout(removeLoader, 1700);
});

function removeLoader() {
  $("#loadingDiv").fadeOut(500, () => {
    $("#loadingDiv").remove();
  });
}
// loader end
