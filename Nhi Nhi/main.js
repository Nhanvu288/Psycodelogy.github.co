function changeBackgroundImage() {
    let ele = document.getElementById('carousel');
    let url1 = "url('./img/Background.jpg')";
    let url2 = "url('./img/Background2.jpg')";
    let url = url1;

    setInterval(() => {
        if (url === url1) url = url2;
        else url = url1;

        ele.style.backgroundImage = url;
    }, 3000)
}

changeBackgroundImage();

function headerStyle() {
    let index = document.documentElement.scrollTop;
    let ele = document.getElementById("header");

    if (index >= 200) {
        ele.style.backgroundColor = "rgba(47, 79, 79, 0.5)";
    }
    else ele.style.backgroundColor = "";
}


let arrowLeft = document.querySelector('#arrow-left');
let arrowRight = document.querySelector('#arrow-right');
arrowRight.addEventListener('click', clickRight);

function clickRight() {
    location.href = '/Thành Nhân/index.html';
};


arrowLeft.addEventListener('click', clickLeft);

function clickLeft() {
    location.href = '/Hương Thảo/index.html';
};

// headerStyle();