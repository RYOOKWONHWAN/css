let bicp = document.querySelector('#photo > img');
console.log(bicp.src);
let list_zone = document.querySelectorAll('ul#inner_list > li');

let ul_li = list_zone;

ul_li = [...ul_li];

ul_li.map((liTag, idx) => {
    let atag = liTag.querySelector('a');
    atag.onclick = (e) => {
        bicp.src = atag.href;
        return false;
    };
});
let m_num = 0;
let ind = 0;
let next_btn = document.querySelector('#next_btn');
next_btn.onclick = (e) => {
    if (m_num >= ul_li.length - 3) return false;
    m_num++;

    list_zone[ind].style.marginLeft = -100 * m_num + 'px';
    ind = ind + 1;
    return false;
};
let before_btn = document.querySelector('#before_btn');
before_btn.onclick = (e) => {
    if (m_num >= ul_li.length - 3) return false;
    m_num--;

    list_zone[ind].style.marginLeft = -100 * m_num + 'px';

    ind = ind - 1;
    if (ind == 0) {
        ind = 1;
        return false;
    }

    return false;
};
