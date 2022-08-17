"use strict";

function myTimer() {
  // Deadline date declaration
  const birthday = Date.parse("14 Feb 2023 ");
  console.log(birthday);

  //Present date declaration
  const now = new Date();
  console.log(now);

  //Difference between presence and deadline
  const diff = birthday - now;
  console.log(diff);

  // Coverting the countdown time(milliseconds) to secs, mins, hrs, days.
  const days = Math.floor(diff / (1000 * 60 * 60 * 24)); //Days in secs
  const hours = Math.floor(diff / (1000 * 60 * 60)); //Hours in secs
  const mins = Math.floor(diff / (1000 * 60)); // Mins in secs
  const secs = Math.floor(diff / 1000); //
  console.log(days, hours, mins, secs);

  //Getting the value of the days,hours,mins,secs
  const d = days;
  const h = hours - days * 24;
  const m = mins - hours * 60;
  const s = secs - mins * 60;

  console.log(d, h, m, s);
  document.getElementById("seconds").textContent = s;
  document.getElementById("minutes").textContent = m;
  document.getElementById("hours").textContent = h;
  document.getElementById("days").textContent = d;
}

setInterval(myTimer, 1000);

// const date = new Date();
// console.log(date.toLocaleDateString);
