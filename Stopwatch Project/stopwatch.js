const second = 1000,
  minute = second * 60,
  hour = minute * 60,
  day = hour * 24;
var x = null;
var ONE_DAY = 86400000;
var elem = document.getElementById("time");
var minDate = new Date();
minDate.setHours(0);
minDate.setMinutes(0);
var iso = new Date(minDate.valueOf() + ONE_DAY).toISOString();
var minDateString = iso.substring(0, iso.length - 8);
elem.value = minDateString;
elem.min = minDateString;
function setTimer() {
  let time = document.getElementById("time").value;

  var countDown = new Date(time).getTime();
  x = setInterval(function () {
    let now = new Date().getTime(),
      distance = countDown - now;

    (document.getElementById("days").innerText = Math.floor(distance / day)),
      (document.getElementById("hours").innerText = Math.floor(
        (distance % day) / hour
      )),
      (document.getElementById("minutes").innerText = Math.floor(
        (distance % hour) / minute
      )),
      (document.getElementById("seconds").innerText = Math.floor(
        (distance % minute) / second
      ));
  }, second);
  document.getElementById("buttonSet").disabled = true;
}
function resetTimer() {
  document.getElementById("days").innerText = 0;
  document.getElementById("hours").innerText = 0;
  document.getElementById("minutes").innerText = 0;
  document.getElementById("seconds").innerText = 0;
  clearInterval(x);
  document.getElementById("buttonSet").disabled = false;
}
