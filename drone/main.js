
//carusel
var prev = document.querySelector('.prev-slid');
var next = document.querySelector('.next-slid');
var blockSlide = document.querySelectorAll('.slide-drone');
var i = 0;
function showNext() {
    blockSlide[i].style.display = 'none';
    i++;
    if (i>=blockSlide.length){
        i=0;
    }
    blockSlide[i].style.display = 'block';
}
function showPrev() {
    blockSlide[i].style.display = 'none';
    i--;
    if (i < 0){
        i = blockSlide.length-1;
    }
    blockSlide[i].style.display = 'block';
}
prev.onclick = showPrev;
next.onclick = showNext;

var m = document.querySelector('.slideshow-container');
console.log(m.offsetTop);

