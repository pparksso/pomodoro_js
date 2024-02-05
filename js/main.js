// save 누르면 다 사라지고 새로운 리스트 생겨야함
// save 눌렀을 때의 리스트 퍼블리싱 해야됨
const mainContainer = document.getElementById('main');
const changeBtns = document.getElementById('changeBtns');
const min = document.getElementById('min');
const sec = document.getElementById('sec');
const startBtn = document.getElementById('startBtn');
const addTaskBtn = document.getElementById('addTaskBtn');
const textBox = document.getElementById('textBox');
const textCancleBtn = document.getElementById('cancleBtn');
const setBtn = document.getElementById('setBtn');
const settingList = document.getElementById('settingList');

const countMin = (min) => {
  if (min < 10) {
    return `0${min}`;
  } else {
    return min;
  }
};

// 1. task 추가 기능
// { id: -, name: -, count: -, endCount: - }
// (pomodoro 1 + short 1) * 4 = 4count => long 1

//
