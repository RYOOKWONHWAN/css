let btn = document.querySelector('button');
// btn.onclick = () => {
//     alert('click1');
// };
// btn.onclick = () => {
//     alert('click2');
// };
function click1() {
    alert('click1');
}
function click2() {
    alert('click2');
}
// btn.addEventListener('이벤트', 함수, 이벤트전파);
// 이벤트 전파 => true : 캡처링 false: 버블링
console.log(addEventListener ? true : false);
btn.addEventListener('click', click1, false);
btn.addEventListener('click', click2, false);
// btn.removeEventListener('click', click2);
