let element1 = document.querySelector("#instruction-list li:nth-child(6)");
let element2 = document.querySelector("#instruction-list li:nth-child(3)");
let button1 = document.createElement("button");
let button2 = document.createElement("button");
button1.innerHTML = "Starta Timer";
button2.innerHTML = "Starta Timer";
button1.className = "buttons";
button2.className = "buttons";
element1.appendChild(button1);
element2.appendChild(button2);
button1.addEventListener("click", startTimer);
button2.addEventListener("click", startTimer);

function startTimer() {
  let button = event.target;
  let element = button.parentNode;
  button.remove();
  let timer = document.createElement("span");
  timer.innerHTML = "5:00";
  element.appendChild(timer);

  let countdown = setInterval(function() {
    let time = timer.innerHTML.split(":");
    let minutes = parseInt(time[0], 10);
    let seconds = parseInt(time[1], 10);

    seconds--;

    if (minutes === 0 && seconds === -1) {
      clearInterval(countdown);
      timer.innerHTML = "Klar!";
      return;
    } else if (seconds < 0 && minutes !== 0) {
      minutes--;
      seconds = 59;
    } else if (seconds < 10 && seconds.toString().length !== 2) {
      seconds = "0" + seconds;
    }

    timer.innerHTML = minutes + ":" + seconds;
  }, 1000);
}