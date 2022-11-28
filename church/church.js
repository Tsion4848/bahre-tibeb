//copyright year
let currentDate = new Date();
console.log(currentDate.getFullYear());
// Year counter for footer
let year = document.getElementById("current-year");
year.innerHTML = currentDate.getFullYear();


// let image = document.getElementById("image");
// let images = ['./images/aim.jpeg', './images/logo.jpg', './images/church.jpg', './images/value1.png'];
// setInterval(function(){
//     let random = Math.floor(Math.random() * 4);
//     image.src = images[random];
// }, 3000);


var images = [];

//images[0] = ['./images/ch.jpg'];
images[0] = ['../images/church/ch2.jpg'];
images[1] = ['../images/church/ch20.jpg'];
images[2] = ['../images/church/ch17.jpg'];
images[3] = ['../images/church/ch9.jpg'];
images[4] = ['../images/church/ch.jpg'];
images[5] = ['../images/church/ch10.jpg'];
images[6] = ['../images/church/ch14.jpg'];

var index = 0;

function change() {
  document.getElementById("c-image").src = images[index];
  if (index == 6) {
    index = 0;
  } else {
    index++;
  }
  setTimeout(change, 5000);
}
window.onload = change();


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("shrink-head").style.fontSize = "24px";
  } 
}