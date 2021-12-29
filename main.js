import { typeList } from "./type.js";

let attackTypeSelect = document.querySelector(".attack-type");
let attackTypeInput = document.querySelector(".attack-type-input");

let firstDefenseTypeSelect = document.querySelector(".first-defense-type");
let secondDefenseTypeSelect = document.querySelector(".second-defense-type");
let firstDefenseTypeInput = document.querySelector(".first-defense-type-input");
let secondDefenseTypeInput = document.querySelector(
  ".second-defense-type-input"
);

attackTypeSelect.addEventListener("change", function AttackInput() {
  let attackSelectedType =
    attackTypeSelect.options[attackTypeSelect.selectedIndex].text;

  attackTypeInput.innerHTML = `<img src="${typeList[attackSelectedType].img}"/>${attackSelectedType}`;
});

firstDefenseTypeSelect.addEventListener("change", function firstDefenseInput() {
  firstDefenseSelectedType =
    firstDefenseTypeSelect.options[firstDefenseTypeSelect.selectedIndex].text;

  firstDefenseTypeInput.innerHTML = firstDefenseSelectedType;
});

secondDefenseTypeSelect.addEventListener(
  "change",
  function secondDefenseInput() {
    secondDefenseSelectedType =
      secondDefenseTypeSelect.options[secondDefenseTypeSelect.selectedIndex]
        .text;
    secondDefenseTypeInput.innerHTML = secondDefenseSelectedType;
  }
);

// function convert(type) {
//   let amount = 0;
//     //입력갑 받기
// amount = document.getElementById("fromAmount").value;

//     // 환전하기
//     let convertedAmount = amount * currencyRatio[fromCurrency][toCurrency];
//     // 환전한값 보여주기
//     document.getElementById("toAmount").value = convertedAmount;
//     //환전한값 한국어로
//     renderKoreanNumber(amount, convertedAmount);
//   } else {
//     amount = document.getElementById("toAmount").value;
//     let convertedAmount = amount * currencyRatio[toCurrency][fromCurrency];
//     document.getElementById("fromAmount").value = convertedAmount;
//     renderKoreanNumber(convertedAmount, amount);
//   }

// function resultMsg(type) {
//   let amount = 0;
//   if (type == "from") {
//     //입력갑 받기
//     amount = document.getElementById("fromAmount").value;
//     // 환전하기
//     let convertedAmount = amount * currencyRatio[fromCurrency][toCurrency];
//     // 환전한값 보여주기
//     document.getElementById("toAmount").value = convertedAmount;
//   }
// }
