"use strict";
var daysLeft, hoursLeft, minsLeft, secondsLeft;

//set date displayed in calendar
var currentDay = new Date();

//set date timer starts from
var startDay = new Date("12 April 2022");

//write to id
document.getElementById("today").innerHTML = displayToday(currentDay);
runTimer();
//set interval of 1000ms
setInterval("runTimer()", 1000);

//function to display today
function displayToday(currentDay) {
    //array to store month names
    var monthName = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    //get the date
    var thisDate = currentDay.getDate();
    //get the month
    var thisMonth = currentDay.getMonth();
    //get the year
    var thisYear = currentDay.getFullYear();
    //display all in one sentence
    return "Today is " + thisDate + " " + monthName[thisMonth] + " " + thisYear
}

//function to run timer
function runTimer() {
    //set date displayed in calendar
    var currentDay = new Date();
    //calculate days left, hours left, mins left and seconds left
    daysLeft = (currentDay - startDay) / (1000 * 60 * 60 * 24);
    hoursLeft = (daysLeft - Math.floor(daysLeft)) * 24;
    minsLeft = (hoursLeft - Math.floor(hoursLeft)) * 60;
    secondsLeft = (minsLeft - Math.floor(minsLeft)) * 60;
    //display via id
    document.getElementById("days").textContent = Math.floor(daysLeft);
    document.getElementById("hours").textContent = Math.floor(hoursLeft);
    document.getElementById("mins").textContent = Math.floor(minsLeft);
    document.getElementById("secs").textContent = Math.floor(secondsLeft);
}

