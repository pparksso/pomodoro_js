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

changeBtns.addEventListener('click', function (e) {
  changeBtns.querySelectorAll('button').forEach((child) => {
    child.classList.remove('active');
  });
  e.target.classList.add('active');
  changeModeHandler(e);
});

addTaskBtn.addEventListener('click', (e) => {
  addTaskBtn.style.display = 'none';
  textBox.style.display = 'block';
});

textCancleBtn.addEventListener('click', () => {
  addTaskBtn.style.display = 'block';
  textBox.style.display = 'none';
});

setBtn.addEventListener('click', () => {
  settingList.classList.toggle('on');
});
