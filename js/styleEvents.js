function updateModeStyles(className, textColor, time) {
  mainContainer.className = `container ${className}`;
  startBtn.style.color = textColor;
  min.innerText = countMin(time);
}

function changeModeHandler(e) {
  const name = e.target.id;
  switch (name) {
    case 'shortBtn':
      updateModeStyles('bg-green', '#38858A', TIME.SHORT);
      break;
    case 'longBtn':
      updateModeStyles('bg-blue', '#397097', TIME.LONG);
      break;
    default:
      updateModeStyles('bg-red', '#ba4949', TIME.POMODORO);
      break;
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
