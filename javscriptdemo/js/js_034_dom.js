let hNode = document.getElementById('selector');
console.log(hNode);
console.log(typeof hNode);

let hid = document.querySelector('#selector');
console.log(hid);
let hcl = document.querySelector('.choice');
console.log(hcl);
let pNode = document.getElementsByTagName('p');
console.log(typeof pNode);

console.log(typeof pNode);
console.log(pNode.length);
console.log(pNode[0]);
console.log(pNode.item(0));
console.log(pNode[0].innerText);
pNode[0].style.color = 'red';
pNode[0].style.backgroundColor = 'blue';
function process() {
    alert('test');
    let fname = document.frm.fname;
    console.log('fname: ', fname);
    console.log(fname.value);
    return false;
}
