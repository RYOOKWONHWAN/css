let lotto = [];

for (let i = 0; i < 6; i++) {
    let a = Math.random() * 45;
    a = Math.floor(a) + 1;
    lotto.push(parseInt(a));

    for (let j = 0; j < i; j++) {
        if (lotto[j] == lotto[i]) {
            lotto.pop();
            i--;
            break;
        }
    }
}
let divList = document.querySelectorAll('div.wrap div');
divList.forEach((element, idx) => {
    element.innerText = lotto[idx];
});
