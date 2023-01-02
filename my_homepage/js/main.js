let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName('mySlides');
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = 'block';
    setTimeout(showSlides, 3000); // Change image every 2 seconds
}

// 팝업 열기
function popup() {
    var url = 'popup.html';
    var name = 'popup test';
    var option = 'width = 500, height = 500, top = 100, left = 200, location = no';
    window.open(url, name, option);
}
