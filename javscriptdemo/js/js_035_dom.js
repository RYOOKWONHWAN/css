let mynod = document.getElementById('p2');
console.log(mynod);

console.log(`mynod: ${mynod}`);
let pt = mynod.parentNode;
console.log(pt);
console.log(`pt : ${pt}`);
mynod.style.color = 'blue';
////////////////////////////////////////
let prevNode = mynod.previousSibling;
console.log(prevNode);
console.log(`prevNode:${prevNode}`);
////////////////////////////////////////
prevNode = prevNode.previousSibling;
console.log(prevNode);
console.log(`prevNode:${prevNode}`);
////////////////////////////////////////
let prevElementNode = mynod.previousElementSibling;
console.log(prevElementNode);
console.log(`prevElementNode:${prevElementNode}`);
////////////////////////////////////////
let nextNode = mynod.nextSibling;
console.log(nextNode);
console.log(`${nextNode}`);
nextNode = nextNode.nextSibling;
console.log(nextNode);
console.log(`${nextNode}`);

////////////////////////////////////////

let nextElementSibling = mynod.nextElementSibling;

console.log(`${nextElementSibling}`);

//////////////////////////////////////////////

let divNode = document.getElementById('wrap');

console.log(divNode);

let divChildNode = divNode.childNodes;

console.log(`${divChildNode}`);
console.log(divChildNode);
///////////////////////////////////////////////////
let p4Node = document.querySelector('#p4');

console.log(p4Node);

console.log(`${p4Node}`);

let aNode = p4Node.firstElementChild;
console.log(aNode);
console.log(`${aNode}`);

/////////////////////////////////////////////
let aAttrNode = aNode.getAttribute('src');
console.log(aAttrNode);

aAttrNode = aNode.src;
console.log(aAttrNode);

aNode.setAttribute('title', '스타배우');

aNode.id = 'imgGosu';

let aAttrList = aNode.getAttributeNode;
console.log(aAttrList);
console.log(`aAttrList :${aAttrList}`);

console.log(aNode.title);
console.log(aNode.id);
