let data = 10;
let fData = Number(data);
let nObj = new Number(data);
console.log(`data=${typeof data}`);
console.log(`fData=${typeof fData}`);
console.log(`nObj=${typeof nObj}`);

console.log(typeof nObj.toString());
console.log(typeof data.toString());

console.log(data + fData);
console.log(data + nObj);

console.log(typeof nObj.valueOf());
console.log(typeof new String('javascript').valueOf());

let val = '10.0';
// let val = '10.3';
// let val = 'A';
// let val = '10A';
// let val = 'A10';
// let val = 'A10';
console.log(val + val);
console.log(Number(val) + Number(val));
console.log(parseInt(val) + parseInt(val));
