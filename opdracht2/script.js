
/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

/*eslint-env browser*/

/*eslint 'no-console': 0*/

// counter
var counter = 0;
var carouselDiv = document.querySelectorAll("#carousel div");
// buttons

var button = document.querySelector(".button-left").addEventListener('click', slideLeft);
var button = document.querySelector(".button-right").addEventListener('click', slideRight);

//image list
var images = new Array(5);
images[0] = document.querySelector('.img1');
images[1] = document.querySelector('.img2');
images[2] = document.querySelector('.img3');
images[3] = document.querySelector('.img4');
images[4] = document.querySelector('.img5');

var body = document.querySelector('body');
body.onkeydown = arrowFunction;

function arrowFunction(e){
  var key_code = e.which||e.KeyCode;
    switch(key_code){
      case 37: //left arrow
            slideLeft();
            break;
      case 39: //right arrow
            slideRight();
            break;
    }
}

function slideLeft() {
  images[counter].style.display = "none";
  // counter goes to 4
  if (counter == 0) {
    counter = 4;
  } else {
    counter --;
  }
  images[counter].style.display = "block";
}

function slideRight() {
  images[counter].style.display = "none";
  // counter goes to 0
  if (counter == 4) {
    counter = 0;
  } else {
    counter ++;
  }
  images[counter].style.display = "block";
}
