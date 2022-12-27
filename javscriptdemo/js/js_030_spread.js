//spread operator 스프레드 연산자 =전개 연산자 =펼침연산자
//형태 : (...변수)
///////////////////////////////////////////////////////////
//[1] 배열에서의 Spread operator
//1.배열 복사 (Array copy)
let arr1 = [1, 2, 3];
let arr2 = arr1; //얇은 복사 (shallow copy)
console.log(`arr1: ${arr1}`);
console.log(`arr2: ${arr2}`);
arr2.push(4);
console.log(`arr1: ${arr1}`);
console.log(`arr2: ${arr2}`);

let arr3 = [1, 2, 3];
let arr4 = [...arr3];
console.log(`arr3: ${arr3}`);
console.log(`arr4: ${arr4}`);
arr4.push(4);
console.log(`arr3: ${arr3}`);
console.log(`arr4: ${arr4}`);

let arr5 = [10, 20, ...arr3, 40, 50];
console.log(arr5);

let arr6 = [5, 6, [7, 8]];
let arr7 = [1, ...arr6];
console.log(arr7);

//배열 병합
let arr8 = [1, 2, 3];
let arr9 = [4, 5, 6];
let arr10 = [7, 8, 9];
let arr11 = [...arr8, ...arr9, ...arr10];
console.log(arr11);

let arr12 = [arr8, arr9, arr10];
console.log(arr12);

// 함수에서의 spread

// 1. Rest Parameter(나머지 파라미터)
function display(...params) {
    return params.reduce((sum, a) => {
        return sum + a;
    });
}
console.log(display(1, 2));

console.log(display(1, 2, 3, 4, 5, 6));

// 함수 호출 인수 (argument)
console.log(Math.max(1, 2, 3, 4, 5, 6, 7, 8, 9));
console.log(Math.min(1, 2, 3, 4, 5, 6));

let arr13 = [10, 20, 30, 40, 50];
console.log(Math.max(arr13));

console.log(Math.max(...arr13));
console.log(...arr13);

// console.log(...arr13,typeof ...arr13);//typeof , 변수에 ... 사용불가.

//객체에서 spread operator
// 1. 객체 복사
let prevState = { name: '고수', age: 30 };
let currentState = { ...prevState };
console.log(currentState);
prevState = { ...prevState, loc: '서울' };
console.log(prevState);

// prevState = { prevState, loc: '서울' };
// console.log(currentState);

let prevState2 = { name: '고수', age: 30 };
// prevState2.name = '여진구';
prevState2 = { ...prevState2, name: '여진구' };
console.log(prevState2);
//항상 복사 먼저 그후에 변경할 내용 입력
