let map = document.getElementById("map");
let hideBtn = document.getElementById("hide-map");
let showBtn = document.getElementById("show-map");
let bigNumber = document.getElementById("big-number");

function showMap() {
    map.style.animation = "slideInFromRight 0.5s 1";
    map.style.visibility="visible";
    hideBtn.style.animation = "btnSlideInFromRight 0.5s 1";
    hideBtn.style.visibility="visible";
    showBtn.style.visibility = "hidden";
}    


function hideMap() {
    map.style.animation = "slideOutFromLeft 0.5s 1";
    setTimeout(() => {   map.style.visibility="hidden"; }, 500);
    
    hideBtn.style.animation = "btnSlideOutFromLeft 0.5s 1";
    setTimeout(() => {   hideBtn.style.visibility="hidden"; }, 400);
    
    setTimeout(() => {   showBtn.style.visibility="visible"; }, 400);
    
}    


document.getElementById("nav-kontakt").addEventListener("click", function() {
    bigNumber.style.transitionDuration = "200ms";
    setTimeout(() => {   bigNumber.style.color = "yellow"; }, 600);
    bigNumber.style.animation = "bounce 1s 1";
          
});
