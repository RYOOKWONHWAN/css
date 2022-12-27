let pNode = document.getElementById('wrap');

console.log(`${pNode.nodeType} ${pNode.nodeName} ${pNode.nodevalue}`);

let pAttr = pNode.attributes;

console.log(pAttr);
console.log(pAttr[0]);
console.log(pAttr.id);
console.log(pAttr.length);
console.log(pAttr.class);
console.log(pAttr['length']);
console.log(pAttr['class']);
console.log(pNode.getAttribute('class'));
console.log(pNode.class);
/////////////

let textNode = pNode.firstChild;
console.log(textNode);

let bodyNode = document.getElementsByTagName('body')[0];
console.log(bodyNode.innerText);
console.log(bodyNode.innerHTML);
// bodyNode.innerText = '<p>append</p>';
// bodyNode.innerHTML = '<p>append</p>';

let fName = document.querySelector('#fName');
console.log(fName.value);

fName.value = '고수';
console.log(fName.value);
