let arrowLeft = document.querySelector('#arrow-left');
let arrowRight = document.querySelector('#arrow-right');
arrowRight.addEventListener('click', clickRight);

function clickRight() {
    location.href = '/Hương Thảo/index.html';
};


arrowLeft.addEventListener('click', clickLeft);

function clickLeft() {
    location.href = '/Hien/myprofile.html';
};
