'use strict';

var img = document.getElementById("img");
var start_btn = document.getElementById("start_btn").addEventListener('click', changeImage);
var pause_btn = document.getElementById("pause_btn").addEventListener('click', stopImage);
var stopInterval;
// debugger;
var images = [];
images[0] = "assets/images/1.jpg";
images[1] = "assets/images/2.jpg";
images[2] = "assets/images/3.jpg";
images[3] = "assets/images/4.jpg";
images[4] = "assets/images/5.jpg";
images[5] = "assets/images/6.jpg";
images[6] = "assets/images/7.jpg";
images[7] = "assets/images/8.jpg";
images[8] = "assets/images/9.jpg";
images[9] = "assets/images/10.jpg";

var x = 0;
function changeImage(e) {
    e.preventDefault();
    stopInterval = setInterval(show_img, 1000);
};

function show_img() {
    img.src = images[x];
    // console.log(img);
    x++;
    if (x >= images.length) {
        x = 0;
    }
}

function stopImage(e) {
    e.preventDefault();
    clearInterval(stopInterval);
}


