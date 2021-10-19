let arrowLeft = document.querySelector('#arrow-left');
let arrowRight = document.querySelector('#arrow-right');

arrowRight.addEventListener('click', clickRight);

function clickRight() {
    location.href = '/Thanh/thanh.html';
};


arrowLeft.addEventListener('click', clickLeft);

function clickLeft() {
    location.href = '/Thành Nhân/index.html';
};

