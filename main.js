let map = document.getElementById("map");
let hideBtn = document.getElementById("hide-map");
let showBtn = document.getElementById("show-map");

let bigNumber = document.getElementById("big-number");

let nav = document.getElementById("nav-links-phone");
let showNavBtn = document.getElementById("nav-phone-show");
let hideNavBtn = document.getElementById("nav-phone-hide");

let newHide = document.getElementById("nav-phone-hide-new");

let phoneOne = document.getElementById("phone-one");
let phoneTwo = document.getElementById("phone-two");
let phoneThree = document.getElementById("phone-three");
let phoneFour = document.getElementById("phone-four");






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


function showPhoneNav(){
    newHide.style.display = "block";
    newHide.style.visibility = "visible";
    showNavBtn.style.display = "none";
    nav.style.animation = "slideInFromTop 0.5s 1";
    nav.style.visibility="visible";
    hideNavBtn.style.animation = "slideInFromTop 0.5s 1 ";
    hideNavBtn.style.visibility="visible";

    phoneOne.style.display = "block";
    phoneTwo.style.display = "block";
    phoneThree.style.display = "block";
    phoneFour.style.display = "block";

    setTimeout(() => { phoneOne.style.animation = "liSlideInFromRight 0.8s 1 "; }, 0);
    setTimeout(() => { phoneTwo.style.animation = "liSlideInFromRight 1s 1 "; }, 0);
    setTimeout(() => { phoneThree.style.animation = "liSlideInFromRight 1.2s 1 "; }, 0);
    setTimeout(() => { phoneFour.style.animation = "liSlideInFromRight 1.4s 1 "; }, 0);

}

function hidePhoneNav() {
    newHide.style.display = "none";
    showNavBtn.style.display = "block";
    setTimeout(() => { phoneOne.style.animation = "liSlideOutToRight 0.8s 1 "; }, 0);
    setTimeout(() => { phoneTwo.style.animation = "liSlideOutToRight 1s 1 "; }, 0);
    setTimeout(() => { phoneThree.style.animation = "liSlideOutToRight 1.5s 1 "; }, 0);
    setTimeout(() => { phoneFour.style.animation = "liSlideOutToRight 2s 1 "; }, 0);

    setTimeout(() => { nav.style.animation = "slideOutFromBottom 0.5s 1"; }, 600);

    
    setTimeout(() => {   nav.style.visibility="hidden"; }, 800);

    setTimeout(() => {  hideNavBtn.style.animation = "slideOutFromBottom 0.5s 1"; }, 800);
    

    setTimeout(() => {   hideNavBtn.style.visibility="hidden"; }, 800);

    setTimeout(() => {  phoneOne.style.display = "none"; 
    phoneTwo.style.display = "none";
    phoneThree.style.display = "none";
    phoneFour.style.display = "none";}, 1000);

    }  





document.getElementById("nav-kontakt").addEventListener("click", function() {
    bigNumber.style.transitionDuration = "200ms";
    setTimeout(() => {   bigNumber.style.color = "yellow"; }, 600);
    bigNumber.style.animation = "bounce 1s 1";
          
});
