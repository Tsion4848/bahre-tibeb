// function toggleClock() {
//     // get the clock
//     var myClock = document.querySelector('.tmhrt');

//     // get the current value of the clock's display property
//     var displaySetting = myClock.style.display;

//     // also get the clock button, so we can change what it says
//     var clockButton = document.querySelector('.abnet');

//     // now toggle the clock and the button text, depending on current state
//     if (displaySetting == 'block') {
//       // clock is visible. hide it
//       myClock.style.display = 'none';
//       // change button text
//       clockButton.innerHTML = 'Show clock';
//     }
//     else {
//       // clock is hidden. show it
//       myClock.style.display = 'block';
//       // change button text
//       clockButton.innerHTML = 'Hide clock';
//     }
//   }


const links = document.querySelectorAll(".list-item");
const tmhrt = document.querySelector(".tmhrt");
const tmhrtItem = document.getElementById("tmhrt-item");
const abnet = document.querySelector(".abnet");
const abnetItem = document.getElementById("abnet-item");
const mezmur = document.querySelector(".mezmur");
const mezmurItem = document.getElementById("mezmur-item");
const kinetbeb = document.querySelector(".kinetbeb");
const kinetbebItem = document.getElementById("kinetbeb-item");
const htsanat = document.querySelector(".htsanat");
const htsanatItem = document.getElementById("htsanat-item");
const leloch = document.querySelector(".leloch");
const lelochItem = document.getElementById("leloch-item");
const tmhrtClass = document.querySelector(".tmhrt-class");
const abnetClass = document.querySelector(".abnet-class");
const mezmurClass = document.querySelector(".mezmur-class");
const kinetbebClass = document.querySelector(".kinetbeb-class");
const htsanatClass = document.querySelector(".htsanat-class");
const lelochClass = document.querySelector(".leloch-class");
const choose = document.getElementById("choose");

let pages = [tmhrt, abnet, mezmur, kinetbeb, htsanat, leloch];

// links.forEach((link, i) => {
//   link.addEventListener("click", function () {
//     links.forEach((el) => {
//       el.classList.remove("active");
//     });
//     pages.forEach((page) => {
//       page.classList.add("hidden");
//     });
//     pages[i].classList.remove("hidden");
//     link.classList.add("active");
//   });
// });



tmhrtClass.addEventListener("click", function () {
  if (tmhrt.style.display === 'none') {
        tmhrt.style.display = 'block';
        tmhrtItem.style.borderBottom = "2px solid #fff";
        //tmhrtItem.style.background = "#669999";
        abnet.style.display = 'none';
        mezmur.style.display = 'none';
        kinetbeb.style.display = 'none';
        htsanat.style.display = 'none';
        leloch.style.display = 'none';
        choose.style.display = 'none';
        abnetItem.style.borderBottom = "2px solid #334d4d";
        mezmurItem.style.borderBottom = "2px solid #334d4d";
        kinetbebItem.style.borderBottom = "2px solid #334d4d";
        htsanatItem.style.borderBottom = "2px solid #334d4d";
        lelochItem.style.borderBottom = "2px solid #334d4d";
  } 
});
abnetClass.addEventListener("click", function () {
    if (abnet.style.display === 'none') {
        abnet.style.display = 'block';
        abnetItem.style.borderBottom = "2px solid #fff";
        //abnetItem.style.background = "#669999";
        tmhrt.style.display = 'none';
        mezmur.style.display = 'none';
        kinetbeb.style.display = 'none';
        htsanat.style.display = 'none';
        leloch.style.display = 'none';
        choose.style.display = 'none';
        tmhrtItem.style.borderBottom = "2px solid #334d4d";
        mezmurItem.style.borderBottom = "2px solid #334d4d";
        kinetbebItem.style.borderBottom = "2px solid #334d4d";
        htsanatItem.style.borderBottom = "2px solid #334d4d";
        lelochItem.style.borderBottom = "2px solid #334d4d";
    }
  });
mezmurClass.addEventListener("click", function () {
    if (mezmur.style.display === 'none') {
        mezmur.style.display = 'block';
        mezmurItem.style.borderBottom = "2px solid #fff";
        //mezmurItem.style.background = "#669999 ";
        abnet.style.display = 'none';
        tmhrt.style.display = 'none';
        kinetbeb.style.display = 'none';
        htsanat.style.display = 'none';
        leloch.style.display = 'none';   
        choose.style.display = 'none';
        abnetItem.style.borderBottom = "2px solid #334d4d";
        tmhrtItem.style.borderBottom = "2px solid #334d4d";
        kinetbebItem.style.borderBottom = "2px solid #334d4d";
        htsanatItem.style.borderBottom = "2px solid #334d4d";
        lelochItem.style.borderBottom = "2px solid #334d4d"; 
    }
});
kinetbebClass.addEventListener("click", function () {
    if (kinetbeb.style.display === 'none') {
        kinetbeb.style.display = 'block';
        kinetbebItem.style.borderBottom = "2px solid #fff";
        //kinetbebItem.style.background = "#669999 ";
        abnet.style.display = 'none';
        tmhrt.style.display = 'none';
        mezmur.style.display = 'none';
        htsanat.style.display = 'none';
        leloch.style.display = 'none';   
        choose.style.display = 'none';
        abnetItem.style.borderBottom = "2px solid #334d4d";
        mezmurItem.style.borderBottom = "2px solid #334d4d";
        tmhrtItem.style.borderBottom = "2px solid #334d4d";
        htsanatItem.style.borderBottom = "2px solid #334d4d";
        lelochItem.style.borderBottom = "2px solid #334d4d"; 
    }
});
htsanatClass.addEventListener("click", function () {
    if (htsanat.style.display === 'none') {
        htsanat.style.display = 'block';
        htsanatItem.style.borderBottom = "2px solid #fff";
        //htsanatItem.style.background = "#669999 ";
        abnet.style.display = 'none';
        tmhrt.style.display = 'none';
        kinetbeb.style.display = 'none';
        mezmur.style.display = 'none';
        leloch.style.display = 'none';  
        choose.style.display = 'none';
        abnetItem.style.borderBottom = "2px solid #334d4d";
        mezmurItem.style.borderBottom = "2px solid #334d4d";
        kinetbebItem.style.borderBottom = "2px solid #334d4d";
        tmhrtItem.style.borderBottom = "2px solid #334d4d";
        lelochItem.style.borderBottom = "2px solid #334d4d";  
    }
});
lelochClass.addEventListener("click", function () {
    if (leloch.style.display === 'none') {
        leloch.style.display = 'block';
        lelochItem.style.borderBottom = "2px solid #fff";
        //lelochItem.style.background = "#669999 ";
        abnet.style.display = 'none';
        tmhrt.style.display = 'none';
        kinetbeb.style.display = 'none';
        htsanat.style.display = 'none';
        mezmur.style.display = 'none';
        choose.style.display = 'none';
        abnetItem.style.borderBottom = "2px solid #334d4d";
        mezmurItem.style.borderBottom = "2px solid #334d4d";
        kinetbebItem.style.borderBottom = "2px solid #334d4d";
        htsanatItem.style.borderBottom = "2px solid #334d4d";
        tmhrtItem.style.borderBottom = "2px solid #334d4d";  
    }
});



// links.forEach((link, i) => {
//     link.addEventListener("click" function(){
//         pages.forEach(page){
//             if (page[i].style.display === 'none'){
//                 pages[i]
//             }
//         }
//     })
// })
