let images = document.querySelectorAll('.cover');
let arrowLeft = document.querySelector('#arrow-left');
let arrowRight = document.querySelector('#arrow-right');
let detail = document.querySelectorAll('.detail');
let overView = document.querySelector('#overview');
let placeLived = document.querySelector('#placelived');
let education = document.querySelector('#education');
let index = 0;

console.log(images);

function reset() {
  images.forEach(function (element) {
    element.style.display = 'none';
  });
};

function startSlide() {
  reset();
  images[0].style.display = 'block';
};

function rightImage() {
  reset();
  images[index + 1].style.display = 'block';
  index = index + 1;
};

arrowRight.addEventListener('click', clickRight);

function clickRight() {
  if (index === images.length - 1) {
    index = -1;
  }
  rightImage();
}

function leftImage() {
  reset();
  images[index - 1].style.display = 'block';
  index = index - 1;
};

arrowLeft.addEventListener('click', clickLeft);

function clickLeft() {
  if (index === 0) {
    index = images.length;
  }
  leftImage();
}


let arrowLeft2 = document.querySelector('#arrow-left2');
let arrowRight2 = document.querySelector('#arrow-right2');

arrowRight2.addEventListener('click', clickRight2);

function clickRight2() {
  location.href = '/Nhi Nhi/index.html';
};


arrowLeft2.addEventListener('click', clickLeft2);

function clickLeft2() {
  location.href = '/Thanh/thanh.html';
};

startSlide();
