const fruits = ['banana', 'orange', 'apple', 'mango'];
console.log(fruits);
console.log(fruits.toString);

console.log(typeof fruits.join());
console.log(fruits.join('*'));
console.log(fruits.join('_'));

// 배열 끝에 요소 추가
//push
fruits[4] = 'kiwi';
console.log(fruits);
console.log(fruits.push('melon'));
console.log(fruits);
// 배열 끝에 제거 pop
fruits.pop();
console.log(fruits);

//앞에 추가
console.log(fruits.unshift('melon'));
console.log(fruits);
//앞에 제거
console.log(fruits.shift());
console.log(fruits);

//인덱스 번호로 삭제
delete fruits[3];
console.log(fruits);
//삭제시 empty로 남음

fruits[3] = 'mango';
console.log(fruits);

//특정 범위의 요소를 가져옴
console.log(fruits.slice(1, 3));

console.log(fruits.slice(-4, -2));
//1번부터 끝까지
console.log(fruits.slice(1));
//오름차순, 내림차순
console.log(fruits.sort());
console.log(fruits.sort().reverse());

let point = [40, 100, 1, 5, 10];
console.log(point.sort());

point.sort(function (a, b) {
    return a - b;
});
console.log(point);
point.sort(function (a, b) {
    return b - a;
});
console.log(point);

let xData = [1, 2, 3];
let yData = [4, 5, 6];
let zData = xData.concat(yData);
console.log(zData);
console.log(zData.length);

let aData = [[1, 2, 3]];
let bData = [[4, 5, 6]];
let arr2 = aData.concat(bData);
console.log(arr2);

let arr3 = [1, 3, [[[4, 5]]], [7, 8], [[9, 10], 12]];
console.log(arr3);
console.log(arr3.flat());
console.log(arr3[0]);
console.log(arr3[2][0]);
console.log(arr3[2][0][0][0]);
console.log(arr3[4][0][0]);
console.log(arr3.flat(4));
let kData = arr3.flat(2);
console.log(kData[2][0]);
