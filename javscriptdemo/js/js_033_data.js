let arr = [1, 2, 3, undefined, 4, undefined, undefined, 5];
let res = arr.filter((element) => {
    return element;
});
let sum = res.reduce((total, element) => {
    return total + element;
});

console.log(`합계 : ${sum}`);
console.log(`평균 : ${sum / res.length}`);

let arr2 = [
    ['홍길동', 90, 85, 40],
    ['이영희', 100, 35, 75],
];
// let k = 0;
// for (let i = 0; i < arr2.length; i++) {
//     let b = arr2[i].slice(1, 4);
//     console.log(b);
//     for (let j = 0; j < b.length; j++) {
//         k = k + b[j];
//         console.log(k);
//     }
//     arr2[i].push(k);
//     arr2[i].push(k / 3);
//     k = 0;
// }
// console.log(arr2[0]);
// console.log(arr2[1]);
for (let i = 0; i < arr2.length; i++) {
    let [fullname, ...jumsu] = arr2[i];
    let hap = jumsu.reduce((total, currentVal) => {
        return total + currentVal;
    });
    arr2[i].push(hap);
    arr2[i].push((hap / jumsu.length).toFixed(2));
}
console.log(arr2);

let last = arr2.map((element) => {
    return element[element.length - 1];
});

console.log(last);
console.log(Math.max(...last));
