
const startButton = document.querySelector("[data-start]");
const stopButton = document.querySelector("[data-stop]");
const body = document.querySelector('body')

startButton.addEventListener('click', changeColor)
stopButton.addEventListener('click', stopChangeColor)

timerId = null;
isActive = false;

function changeColor() {
    if(isActive) {
        return;
    }
    isActive = true;
    timerId = setInterval(() => {
        body.style.backgroundColor = getRandomHexColor();
    }, 1000)
}

function stopChangeColor() {
    clearInterval(timerId);
    isActive = false;
}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }
