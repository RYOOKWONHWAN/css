let score = [100, 20, 140];
console.log(score[0]);
console.log(score[1]);
console.log(score[2]);
console.log(score[3]); //undefined
console.log(score.length);

let person = ['john', 'doe', 26, true];

for (let index in person) {
    console.log(person[index], typeof person[index]);
}
let cars = new Array('sasb', 'volvo', 'bmw');
for (let index in cars) {
    console.log(cars[index], typeof cars[index]);
}
let color = [];
console.log(color.length);
color[0] = 'red';
console.log(color[0]);
color.push(1);
console.log(color.length);
color.push(789);
console.log(color.length);
color[8] = 'blue';
console.log(color.length);
for (let i in color) {
    console.log(color[i]);
}
for (let i = 0; i < color.length; i++) {
    console.log(color[i]);
}
let point = new Array(3);
console.log(point.length);

let shape = new Array(10, 30);
console.log(shape.length);
shape[2] = 40;
console.log(shape.length);

shape.forEach((element) => {
    console.log(`${element}`);
});

let co = 'javascript';
//문자열 forEach 불가능
// co.forEach((el) => {
//     console.log(`${el}`);
// });
//.map(callback)
const number = [4, 9, 16, 25];
const res = number.map(function (value, index) {
    return value * 2;
});

console.log(res);

const sqt = number.map(Math.sqrt);
console.log(`sqt=${sqt}`);
c;

const sum = numbers.reduce(getSum);
console.log(`sum=${sum}`);
const ages = [32, 33, 16, 40];
const per = ages.filter((value, index) => {
    return value >= 10;
});
console.log(`per:${per}`);
