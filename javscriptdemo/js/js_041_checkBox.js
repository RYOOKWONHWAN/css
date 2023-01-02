document.frm.onsubmit = () => {
    let admin = document.frm.admin;
    if (!admin.checked) {
        alert('약관에 동의해야합니다.');
        return false;
    }
};
document.frm.allcheck.onclick = function () {
    console.log(this.checked);
    // document.frm.subject1.checked = this.checked;
    // document.frm.subject2.checked = this.checked;
    // document.frm.subject3.checked = this.checked;
    let checkgroup = document.querySelectorAll('.checkgroup');
    console.log(checkgroup.length);
    // for (let i = 0; i < checkgroup.length; i++) {
    //     checkgroup[i] = this.checked;
    // }
    // for (let element of checkgroup) {
    //     element.checked = this.checked;
    // }
    //ES6 Spread operator : NodeList를 Array로 변경
    let myThis = this;
    // let iArray = [...checkgroup];
    // iArray.map(function (element) {
    //     element.checked = myThis.checked;
    // });
    // let myArray = Array.from(checkgroup);
    // console.log(`${myArray}`);
    // console.log(typeof myArray);
    // myArray.map(function (element) {
    //     element.checked = myThis.checked;
    // });
    checkgroup.forEach(function (element) {
        element.checked = myThis.checked;
        console.log(element);
    });
};
