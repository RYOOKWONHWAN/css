// let sum = new Number(0);
// let cnt = 0;
// let opt1 = document.getElementById('opt1');
// let opt2 = document.getElementById('opt2');
// let opt3 = document.getElementById('opt3');
// function getCheckboxValue() {
//     // 선택된 목록 가져오기

//     const query = [opt1, opt2, opt3];

//     // 선택된 목록에서 value 찾기

//     let result = new Number(0);

//     query.forEach((el) => {
//         result += parseInt(el.value);
//         console.log(result);
//     });

//     // 출력

//     document.getElementById('total').innerText = result;
// }
let total = document.getElementById('total');
let chk = document.querySelectorAll('tbody input[type="checkbox"]');
console.log(chk);
let mychk = [...chk];
mychk.map((element) => {
    element.onclick = carcount;
});
console.log(mychk.values);

function carcount() {
    let basic = Number(total.defaultValue);

    console.log(mychk);
    mychk.map((element) => {
        if (element.checked) {
            basic += Number(element.value);
        }
    });
    total.value = basic;
}
