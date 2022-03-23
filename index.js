const calendarDates = document.querySelectorAll("tbody td");
const currentDay = document.querySelectorAll(".current-day p");
const currentMonth = document.querySelector(".current-month");
const prevButton = document.querySelector(".button.prev");
const nextButton = document.querySelector(".button.next");

const DAYS = ["일", "월", "화", "수", "목", "금", "토"];
const MONTHS = [
  "1월",
  "2월",
  "3월",
  "4월",
  "5월",
  "6월",
  "7월",
  "8월",
  "9월",
  "10월",
  "11월",
  "12월",
];

// 현재 날짜 정보 input
var today = new Date();
var dd = today.getDate(); // 날짜 1 ~ 31
var mm = today.getMonth() + 1; // 달 0 ~ 11
var day = today.getDay(); // 요일 0 ~ 6
var yyyy = today.getFullYear(); // 년도 4자리

// 변수정보 입력 화살표 클릭씨 변경되는 변수
var daySet = day;
var ddSet = dd;
var mmSet = mm;
var yyyySet = yyyy;

// 현재 날짜 화면 표시
function showDay() {
  currentDay[0].textContent = DAYS[daySet];
  currentDay[1].textContent = ddSet;
  currentMonth.textContent = `${mmSet}월 ${yyyySet}`;
}

// 현재 달 달력 표시
function setCalendar() {
  // 해당하는 달 1일 요일 판별 및 표시대체
  var firstDay = new Date(`${mmSet} 1, ${yyyySet} 23:15:30`);
  var firstDate = firstDay.getDay();

  //해당 달이 31일 마무리인지 30일 마무리인지 지정
  var monthLangth;
  if (mmSet == 2) monthLangth = 28;
  else if (mmSet == 4 || mmSet == 6 || mmSet == 9 || mmSet == 11)
    monthLangth = 30;
  else monthLangth = 31;

  //1일 날짜 시간순에 따라 숫자 배열
  for (var i = 1; i < monthLangth + 1; i++) {
    calendarDates[firstDate].innerText = i;
    firstDate++;
  }
  //달력 위 날짜 , 일수 표현변경
  daySet = firstDay.getDay();
  ddSet = 1;
}

// 화면 달력 초기화
function resetAll() {
  for (var i = 0; i < 41; i++) {
    calendarDates[i].innerText = "";
  }
}

//초기 화면 달력 로딩
showDay();
setCalendar();

//이전 달로 넘어가기
prevButton.addEventListener("click", function prevClick() {
  if (mmSet > 1) mmSet--;
  else {
    mmSet = 12;
    yyyySet--;
  }
  resetAll();
  setCalendar();
  showDay();
});

//다음 달로 넘어가기
nextButton.addEventListener("click", function nextClick() {
  if (mmSet < 12) mmSet++;
  else {
    mmSet = 1;
    yyyySet++;
  }
  resetAll();
  setCalendar();
  showDay();
});
