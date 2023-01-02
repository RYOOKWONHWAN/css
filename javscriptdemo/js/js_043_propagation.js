document.querySelector('.red').onclick = (e) => {
    alert('red');
    e.stopPropagtion();
};
document.querySelector('.green').onclick = (e) => {
    alert('green');
    e.stopPropagation();
};
document.querySelector('.blue').onclick = (e) => {
    alert('blue');
    e.stopPropagation();
};
document.querySelector('a').onclick = (e) => {
    alert('안녕하세요');

    e.preventDefault();
    return false;
};

/*
[1] Event Propagation()
    캡처링 부모요소에서 타겟요소로 이벤트 전파
    버블링 자식요소에서 타겟요소로 이벤트 전파
[2] 이벤트 차단
    stopPropagation()
[3] stopPropagation() 과 preventDefault() 비교
    stopPropagation() : 이벤트 전파 차단 return false
    jQuery
    preventDefault() : 디폴트 이벤트 차단 return false
    javascript jQuery
    */
