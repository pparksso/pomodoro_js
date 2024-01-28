const mainContainer = document.getElementById('main');
const changeBtns = document.getElementById('changeBtns');
const min = document.getElementById('min');
const sec = document.getElementById('sec');
const startBtn = document.getElementById('startBtn');

const countMin = (min) => {
  if (min < 10) {
    return `0${min}`;
  } else {
    return min;
  }
};

changeBtns.addEventListener('click', function (e) {
  changeBtns.querySelectorAll('button').forEach((child) => {
    child.classList.remove('active');
  });
  e.target.classList.add('active');
  changeModeHandler(e);
});

function changeModeHandler(e) {
  const name = e.target.id;
  if (name === 'shortBtn') {
    mainContainer.className = 'container bg-green';
    startBtn.style.color = '#38858A';
    min.innerHTML = countMin(TIME.SHORT);
  } else if (name === 'longBtn') {
    mainContainer.className = 'container bg-blue';
    startBtn.style.color = '#397097';
    min.innerHTML = countMin(TIME.LONG);
  } else {
    mainContainer.className = 'container bg-red';
    startBtn.style.color = '#ba4949';
    min.innerHTML = countMin(TIME.POMODORO);
  }
}
