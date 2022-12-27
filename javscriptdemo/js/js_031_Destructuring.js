/*
Destructuring 구조분해할당
:Destructuring은 structuring (구조화)된 배열 또는 객체를 비구조화하여 개별적으로 변수에
할당하는 개념이다.
*/
//1. 배열 Destructuring

let level = [5, 10];
let a, b;
a = level[0];
b = level[1];
console.log(`a=${a} b=${b}`);

let c, d;

[c, d] = level;
console.log(`c= ${c} d=${d}`);

[d, c] = [c, d];
console.log(`c=${c} d=${d}`);

// let k, p, next;
// [k, p, next] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(`k=${k} p=${p} next=${next}`);

let k, p, next;
[k, _, p, _, ...next] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(`k=${k} p=${p} next=${next}`);

let u, t, w;
[u, t, w] = [1, 2];
console.log(`u=${u} t=${t} w=${w}`);

[u, t, w = 3] = [1, 2];
console.log(`u=${u} t=${t} w=${w}`);

[u, t = 4, w = 5] = [1, 2];
console.log(`u=${u} t=${t} w=${w}`);
[u = 3, t, w = 5] = [1, 2];
console.log(`u=${u} t=${t} w=${w}`);

const customer = { fullname: '고수', job: '연기자' };
let fullname = customer.fullname;
let job = customer.job;
console.log(`fullname=${customer.fullname} job=${customer.job}`);

let { fullname: fn, job: jb, loc = '서울' } = customer;
console.log(`fullname=${fn} job=${jb}`);
console.log(`loc=${loc}`);

let { s, r } = { s: 1, r: 2 };
console.log(`s=${s} r=${r}`);

let v, z;
{
    (v = 1), (q = 2);
}
console.log(`v=${v} q=${q}`);

let habit = [
    { id: 1, content: '수영', completed: false },
    { id: 2, content: '걷기', completed: true },
    { id: 3, content: '명상', completed: true },
    { id: 4, content: '독서', completed: false },
];

let ls = [];
for (let element of habit) {
    //

    if (element.completed) {
        console.log(element);
        ls.push(element);
    }
}
console.log(ls);
let completedHabit = habit.filter((element) => {
    return element.completed;
});
console.log(completedHabit);
// --------------------------------------------
//member 변수에서 데이터를 추출하여 '고수 고객님은 서울에 거주하십니다 '라고 줄력하세요
let member = { name: '고수', address: { zipCode: '523-143', city: '서울' } };
let { name, city } = member;
console.log(`${member.name} 고객님은 ${member.address.city}에 거주하십니다.`);
console.log(`${name},${city}`);
({
    name,
    address: { city },
} = member);
console.log(`${name} 고객님은 ${city}에 거주하십니다.`);
