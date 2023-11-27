let getSecond = document.querySelector(".second");
let getTen = document.querySelector(".ten");
let getMin = document.querySelector(".min");
let btnStart = document.querySelector(".btn-start");
let btnStop = document.querySelector(".btn-stop");
let btnReset = document.querySelector(".btn-reset");

let interval;
let second = 0;
let ten = 0;
let min = 0;

btnStart.addEventListener("click", () => {
  clearInterval(interval);
  interval = setInterval(startTimer, 1000);
});

btnStop.addEventListener("click", () => {
  clearInterval(interval);
});

btnReset.addEventListener("click", () => {
  clearInterval(interval);
  second = 0;
  ten = 0;
  min = 0;
  getSecond.innerHTML = "00";
  getTen.innerHTML = "00";
  getMin.innerHTML = "00";
});

function startTimer() {
  ten++;
  if (ten <= 9) {
    getTen.innerHTML = "0" + ten;
  } else {
    getTen.innerHTML = ten;
  }

  if (ten > 99) {
    second++;
    getSecond.innerHTML = second <= 9 ? "0" + second : second;
    ten = 0;
    getTen.innerHTML = "00";
  }

  if (second > 59) {
    min++;
    getMin.innerHTML = min <= 9 ? "0" + min : min;
    second = 0;
    getSecond.innerHTML = "00";
  }
}
