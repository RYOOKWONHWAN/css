//함수: 특정 기능을 하는 구문을 독립된 부름으로 만들어 재사용하고자 할때 사용하는 문법이다.

/*
함수 정의
(1) 함수 선언문
function 함수명(매개변수){
    실행문
    return 값
}
(2) 함수 표현식
let test =function (매개변수){
    실행문
    return 값

}
(3) 즉시실행
(function (파라미터){
    console.log(`$(파라미터) run ====`)
})('test');
*/

let year = 2022;
function isLeapYear(year) {
    let check;
    if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
        check = true;
    } else {
        check = false;
    }
    return check;
}
let res = isLeapYear(year);
if (res) {
    console.log(`${year}년은 윤년입니다`);
} else {
    console.log(`${year}년은 평년입니다.`);
}

function add(a, b) {
    console.log(`a=${a}, b=${b}`);
    return a + b;
}
function add2(a, b, c) {
    return a + b + c;
}
console.log(add(2, 3));
console.log(add2(2, 3, 4));
console.log(add());
// console.log(add3());
console.log(add(1));
console.log(add(1, 'script'));
console.log(add(1, 2, 3));
console.log(add(1, null));
console.log(add(1, undefined));
///////////////////////////////////////////////////////////////////////////

// ESS 익명함수
let sum = function (a, b) {
    return a + b;
};
console.log(sum);
console.log(sum(10, 20));
let hap = function (a, b) {
    console.log(a + b);
};
hap;
hap(10, 20);
//ES6 (2015) - 화살표 함수 (arrowfunction)
/*
    화살표 함수 규칙
    (1) 매개변수 지정방법
    ()=> {} // 매개변수가 없는 경우 ()를 해준다
    x => { } // 매개변수가 하나인경우 ()를 생략할 수 있다.
    (x,y)=>{} //매개변수가 2개 이상이라면 ()를 생략할 수 없다.
    (2) 함수몸체 정의 방법
    x=>{return x*x} //single line block으로 {}중괄호를 생략하지 않으면 return을 반드시 해준다.

    x => x*x // 함수 몸체가 한 줄의 구문이면 중괄호를 생략하면서 ruturn 도 생략 가능하다.
    ( ) => {return {a:1}}
    ( ) => ({a:1})
    ( ) => { let x =10;             // multi line block 일때는 생략 불간
                return x*x;}


    */
let sub = (a, b) => {
    return a + b;
};

console.log(sub);
console.log(sub(3, 4));

let cal = (a) => a * 2;
console.log(cal);
console.log(cal(10));

let cal2 = (a) => a * 2;
console.log(cal2);
console.log(cal2(4));

let cal3 = () => console.log('로그인해주세요');
console.log(cal3);
console.log(cal3());
cal3();

// 다양한 함수 구조

function outer(a, b) {
    let result = inner(a, b);
    function inner(a, b) {
        return a + b;
    }
    return result * 2;
}
console.log(outer);
console.log(outer(6, 7));
//콜백함수
// 1. 다른 함수의 인수로 사용되는 함수
// 2. 어떤 이벤트에 의해 호출되는 함수 : btn.onclick = function(){}

function callback(a, b) {
    return a + b;
}

function getNumber(callFunc) {
    console.log(`==${callFunc}`);
    let result = callFunc(1, 6);
    return result;
}
console.log(getNumber(callback));

//클로저 (closure)/
/*
1. 중첩함수는 outer 외부함수가 끝나면 외부에서 outer 외부함수의 자원을 사용할 수 없다.
2. 클로저는 outer 외부 함수보다 중첩하수가 더 오래 유지되는 경우 중첩함수는 이미 
생명주기가 종료한 외부함수의 변수를 참조할 수 있다 .이러한 중첩함수가 클로저이다.
3. 클로저는 변수가 의도치않게 변경되지 않도록 안전하게 은닉하고 
특정함수에게만 상태 변경을 허용하여 상태를 안전하게 변경하고 유지하기 위해 사용한다.

*/

function outerFunc() {
    let sum = 50;
    function innerFunc(a) {
        return sum + a;
    }
    return innerFunc;
}
console.log(outerFunc);
console.log(outerFunc());
let outerCall = outerFunc();
console.log(outerCall);
console.log(outerCall(3));

//함수 파라미터
//(1) 기본 파라미터
function display(a = 0, b = 0) {
    console.log(`a=${a},b=${b}`);
}
display(1, 2);
display(1);
//(2) 나머지 파라미터
// - 파라미터 개수를 기반으로 사용할 수 있도록 제공해주는 연산자이다.
//- spread operator(점 3개를.. )를 맨 마지막 파라미터로 사용해주면된다.
function display2(...args) {
    console.log(args);
    console.log(typeof args, args instanceof Array);
}
display2(1, 2);
display2(1);

function display3(num, ...args) {
    console.log(num);
    console.log(args);
}
display3(1, 2);
display3(1);
display3(1, 2, 3, 4, 5);

//argument 객체
function display4() {
    let result = 0;
    for (let i = 0; i < arguments.length; i++) {
        console.log(typeof arguments, arguments instanceof Array, arguments.callee);
        console.log(arguments[i]);
    }
}
display4(1);
display4(1, 2, 3, 4);
