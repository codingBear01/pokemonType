import { typeList } from "./type.js";

let AttackTypeSelect = document.querySelector(".attack-type");
let AttackTypeInput = document.querySelector(".attack-type-input");

let firstDefenseTypeSelect = document.querySelector(".first-defense-type");
let secondDefenseTypeSelect = document.querySelector(".second-defense-type");
let firstDefenseTypeInput = document.querySelector(".first-defense-type-input");
let secondDefenseTypeInput = document.querySelector(
  ".second-defense-type-input"
);

let selectedType = "노말";

for (let i = 0; i < typeList.length; i++) {
  console.log(typeList[i].타입명);
}

AttackTypeSelect.addEventListener("change", function AttackInput() {
  let selectedType =
    AttackTypeSelect.options[AttackTypeSelect.selectedIndex].text;
  AttackTypeInput.innerHTML = selectedType;

  console.log(AttackTypeInput.innerText);
});

firstDefenseTypeSelect.addEventListener("change", function firstDefenseInput() {
  let selectedType =
    firstDefenseTypeSelect.options[firstDefenseTypeSelect.selectedIndex].text;
  firstDefenseTypeInput.innerHTML = `<img class="flag-img"src="${typeList[selectedType].img}"/>${selectedType}`;

  console.log(firstDefenseTypeInput.innerText);
});

secondDefenseTypeSelect.addEventListener(
  "change",
  function secondDefenseInput() {
    let selectedType =
      secondDefenseTypeSelect.options[secondDefenseTypeSelect.selectedIndex]
        .text;
    secondDefenseTypeInput.innerHTML = `<img class="flag-img"src="${typeList[selectedType].img}"/>${selectedType}`;

    console.log(secondDefenseTypeInput.innerText);
  }
);

// function convert(type) {
//   let amount = 0;
//     //입력갑 받기

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
