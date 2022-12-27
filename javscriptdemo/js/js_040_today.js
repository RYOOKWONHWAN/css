let dateBtnNode = document.querySelector('button');

dateBtnNode.onclick = () => {
    let pNode = document.querySelector('p');

    let today = new Date(); // 날짜는 무조건 new 객체지정
    let year = today.getFullYear();
    let month = today.getMonth() + 1;
    let date = today.getDate();
    let hour = today.getHours();
    let minute = today.getMinutes();
    let second = today.getSeconds();
    pNode.innerText = `${year} ${month} ${date} ${hour} ${minute} ${second}`;
};
