let time = document.querySelector('.time');
let greeting = document.querySelector('.greeting');
let myName = document.querySelector('.myName');
let myFocus = document.querySelector('.myFocus');
let arrowLeft = document.querySelector('#arrow-left');
let arrowRight = document.querySelector('#arrow-right');

function showTime() {
    let today = new Date();
    let hour = today.getHours();
    let minute = today.getMinutes();
    let second = today.getSeconds();


    time.innerText = `${hour}:${addZero(minute)}`;
    setTimeout(showTime, 1000)
};


function addZero(number) {
    return parseInt(number) < 10 ? '0' + number : number;
};

function setBackground() {
    let today = new Date();
    let hour = today.getHours();

    if (hour < 12) {
        document.querySelector('.header').style.backgroundImage = "url('./img/morning.jpg')";
        document.querySelector('.header').style.backgroundPosition = 'cover';
        greeting.innerText = 'Good morning, ';
    } else if (hour < 18) {
        document.querySelector('.header').style.backgroundImage = "url('./img/afternoon.jpg')";
        document.querySelector('.header').style.backgroundPosition = 'cover';
        greeting.innerText = 'Good afternoon, ';
    } else {
        document.querySelector('.header').style.backgroundImage = "url('./img/evening.jpg')";
        document.querySelector('.header').style.backgroundPosition = 'cover';
        greeting.innerText = 'Good evening, ';
    };
};

function getFocus() {
    if (localStorage.getItem('focus2') === null) {
        myFocus.innerText = '[Enter focus]';
    } else {
        myFocus.innerText = localStorage.getItem('focus2');
    };
};


myName.addEventListener('keydown', setName);

function setName(event) {
    if (event.key === 'Enter') {
        localStorage.setItem('name2', event.target.innerText);
        myName.blur();
    } else {
        localStorage.setItem('name2', event.target.innerText);
    };
};


myFocus.addEventListener('keydown', setFocus);


function setFocus(event) {
    if (event.key === 'Enter') {
        localStorage.setItem('focus2', event.target.innerText);
        myFocus.blur();
    } else {
        localStorage.setItem('focus2', event.target.innerText);
    };
};


arrowRight.addEventListener('click', clickRight);

function clickRight() {
    location.href = '/Hien/myprofile.html';
};


arrowLeft.addEventListener('click', clickLeft);

function clickLeft() {
    location.href = '/Nhi Nhi/index.html';
};

showTime();
setBackground();
getName();
getFocus();