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



//scrolling images
var images = [];

//images[0] = ['./images/ch.jpg'];
images[0] = ['./images/gebriel/geb1.jpg'];
images[1] = ['./images/medhanealem/medhn23.jpg'];
images[2] = ['./images/tmket/tmket10.jpg'];
images[3] = ['./images/tmket/tmket13.jpg'];
images[4] = ['./images/meskel/meskel6.jpg'];
images[5] = ['./images/kinetbeb/adwa6.jpg'];
images[6] = ['./images/tmket/tmket1.jpg'];

var index = 0;

function change() {
  document.getElementById("image").src = images[index];
  if (index == 6) {
    index = 0;
  } else {
    index++;
  }
  setTimeout(change, 5000);
}
window.onload = change();



//reduces when scroll
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("shrink-head").style.fontSize = "24px";
  } 
}