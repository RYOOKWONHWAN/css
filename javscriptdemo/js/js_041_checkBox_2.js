// array function 에서 this 는 브라우저의 최상위 객체인 window를 의미한다.
let allCheckNode = document.frm.allcheck;
document.frm.allcheck.onclick = () => {
    document.frm.subject1.checked = allCheckNode.checked;
    document.frm.subject2.checked = allCheckNode.checked;
    document.frm.subject3.checked = allCheckNode.checked;
};
