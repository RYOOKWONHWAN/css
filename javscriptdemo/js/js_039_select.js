document.frm.onsubmit = () => {
    let optFruit = document.querySelector('#sel');
    console.log(`${optFruit.value}`);
    console.log(optFruit);
    let optSelect = optFruit.selectIndex + ' ' + optFruit.value;
    console.log(optSelect);
    return false;
};
