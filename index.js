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
var mmSet = mm;
var yyyySet = yyyy;

// 현재 날짜 화면 표시
currentDay[0].textContent = DAYS[day];
currentDay[1].textContent = dd;
currentMonth.textContent = `${mm}월 ${yyyy}`;

// 현재 날짜 1일 요일판별 (해당하는 달 1일 날짜 판별)
var firstDay = new Date(`${mmSet} 1, ${yyyySet} 23:15:30`);
var firstDate = firstDay.getDay();
