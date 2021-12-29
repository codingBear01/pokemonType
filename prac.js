let b = [
  { 타입: "응가", 특징: 1, 대변: 2 },
  { 타입: "오줌", 속성: 1, 소변: 2 },
];

for (let i = 0; i < b.length; i++) {
  let typeName = b[i].타입;
  console.log(typeName);
}

// function q1() {
//   // 여기에 코드를 입력하세요
//   $('#names-q1').empty();
//   $.ajax({
//       type: "GET",
//       url: "http://openapi.seoul.go.kr:8088/6d4d776b466c656533356a4b4b5872/json/RealtimeCityAir/1/99",
//       data: {},
//       success: function (response) {
//           let rows = response["RealtimeCityAir"]["row"];
//           for (let i = 0; i < rows.length; i++) {
//               let gu_name = rows[i]['MSRSTE_NM'];
//               let gu_mise = rows[i]['IDEX_MVL'];
//               let temp_html = `<li>${gu_name} : ${gu_mise}</li>`
//               $('#names-q1').append(temp_html);
//           }
//       }
//   })
// }
