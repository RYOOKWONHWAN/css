let data = 'It`s alright';
console.log(data);
console.log(data.length);

/*
특정 범위 데이터를 리턴해주는 3가지 메소드
1.substring(start,end)
2.substr(start,length)
3.slice(start,end)
*/

data = 'Apple, Banana, Kiwi';
console.log(`substring : ${data.substring(7, 13)}`);
//substring은 음수값을 지원하지않는다.
console.log(`substring:${data.substring(-12, -6)}`);

console.log(`data=${data}`);

console.log(`substr : ${data.substr(7, 6)}`);
console.log(`substr : ${data.substr(-12, 6)}`);
console.log(`data: ${data}`);

console.log(`slice : ${data.slice(7, 13)}`);
console.log(`slice : ${data.slice(-12, -6)}`);
console.log(`data : ${data}`);

//replace (`찾을 문자열| RegExp','바꿀문자열');
// i: 대소문자 구분없음, g: 모든 문자열;
console.log(`replace : ${data.replace('Banana', 'Grape')}`);
console.log(`data: ${data}`);

data = 'Mr Blue has a blue house and a blue car';
console.log(data.replace(/blue/, 'red'));
data = 'Mr Blue has a blue house and a blue car';
console.log(data.replace(/blue/g, 'red'));
data = 'Mr Blue has a blue house and a blue car';
console.log(data.replace(/blue/i, 'red'));
data = 'Mr Blue has a blue house and a blue car';
console.log(data.replace(/blue/gi, 'red'));

data = 'Hello World';
console.log(`toUpperCase() : ${data.toUpperCase()}`);
console.log(`toLowerCase() : ${data.toLowerCase()}`);

let data2 = 'javascript';

console.log(`concat(): ${data.concat(data2)}`);
console.log(`concat(): ${data.concat(' ', data2)}`);
console.log(`concat(): ${data.concat('_', data2)}`);

console.log(`charAt(): ${data.charAt(0)}`);
console.log(`charAt(): ${data.charCodeAt(0)}`);

data = 'Mr Blue has a blue house and a blue car';
let res = data.match(/blue/g);

console.log(`match():${res}, ${typeof res}, ${res instanceof Array}`);

res = data.match(/red/g);

console.log(`match():${res}, ${typeof res}, ${res instanceof Array}`);

res = data.search(/blue/g);

console.log(`search() :  ${res}`);

res = data.search(/red/g);

console.log(`search() :  ${res}`);
data = 'Mr Blue has a blue house and a blue car';
//indexOf 문자열 리턴
console.log(data.indexOf('M'));
console.log(data.indexOf('B'));

let position = data.indexOf('blue');
console.log(position); //14
//31
console.log(data.indexOf('blue', position + 1));

let pos = -1;
do {
    pos = pos + 1;
    pos = data.indexOf('blue', pos);
    if (pos != -1) console.log(pos);
    else break;
} while (true);

let text = 'korea';
console.log(text.repeat(10));

text = '*';
console.log(text.repeat(10));

let text2 = '  korea   data ';

console.log(text2.length);

//12
console.log(text2.trim().length);
