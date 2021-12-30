import { typeList } from "./type.js";

let attackTypeSelect = document.querySelectorAll(".attack-type li");
let attackTypeInput = document.querySelector(".attack-type-input");

let firstDefenseTypeSelect = document.querySelectorAll(
  ".first-defense-type li"
);
let secondDefenseTypeSelect = document.querySelectorAll(
  ".second-defense-type li"
);
let firstDefenseTypeInput = document.querySelector(".first-defense-type-input");
let secondDefenseTypeInput = document.querySelector(
  ".second-defense-type-input"
);
let resultMsg = document.querySelector(".result-msg");
const refreshBtn = document.querySelector(".refresh-btn");

let attackSelectedType = "없음";
let firstDefenseSelectedType = "없음";
let secondDefenseSelectedType = "없음";

attackTypeSelect.forEach((item) => {
  item.addEventListener("click", function () {
    attackSelectedType = this.id;

    attackTypeInput.innerHTML = `<img src="${typeList[attackSelectedType].img}"/>${attackSelectedType}`;

    result();
  });
});

firstDefenseTypeSelect.forEach((item) => {
  item.addEventListener("click", function () {
    firstDefenseSelectedType = this.id;

    firstDefenseTypeInput.innerHTML = `<img src="${typeList[firstDefenseSelectedType].img}"/>${firstDefenseSelectedType}`;

    result();
  });
});

secondDefenseTypeSelect.forEach((item) => {
  item.addEventListener("click", function () {
    secondDefenseSelectedType = this.id;

    secondDefenseTypeInput.innerHTML = `<img src="${typeList[secondDefenseSelectedType].img}"/>${secondDefenseSelectedType}`;

    if (secondDefenseTypeInput.innerHTML == firstDefenseTypeInput.innerHTML) {
      alert("다른 타입을 선택하세요!");
      secondDefenseTypeInput.innerHTML = "";
    }
    result();
  });
});

function result() {
  let calResult =
    typeList[attackSelectedType][firstDefenseSelectedType] *
    typeList[attackSelectedType][secondDefenseSelectedType];

  if (calResult == 4) {
    resultMsg.innerText = "효과는 4배다!";
  } else if (calResult == 2) {
    resultMsg.innerText = "효과는 2배다!";
  } else if (calResult == 1) {
    resultMsg.innerText = "효과는 보통이다!";
  } else if (calResult == 0.5) {
    resultMsg.innerText = "효과는 1/2배다!";
  } else if (calResult == 0.25) {
    resultMsg.innerText = "효과는 1/4배다!";
  } else if (calResult == 0) {
    resultMsg.innerText = "효과는 없다!";
  }
}

refreshBtn.addEventListener("click", () => {
  attackTypeInput.innerHTML = "";
  firstDefenseTypeInput.innerHTML = "";
  secondDefenseTypeInput.innerHTML = "";
  resultMsg.innerHTML = "";
});

// css/js로 꾸미기
// 반응형으루~
