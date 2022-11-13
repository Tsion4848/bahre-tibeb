let scroll1 = window.pageYOffset;
window.onscroll = function(){
    let scroll2 = window.pageYOffset;
    if (scroll1 > scroll2){
        document.getElementById("sidebar-senbet").style.top = '0';
    }
    else{
        document.getElementById("sidebar-senbet").style.top = '-130px';
    }
    scroll1 = scroll2;
    };

window.addEventListener("scroll", function(){
    var navig = document.getElementById("mid-nav");
    navig.classList.toggle("sticky", window.scrollY > 0);
});
// window.addEventListener("scroll", function(){
//     var navig = document.getElementById("mid-nav");
//     navig.classList.toggle("sticky", window.scrollY < 0);
// });
// window.onscroll = function(){
//     var navig = document.getElementById("mid-nav");
//     navig.classList.toggle("sticky", window.scrollY > 0);
// };