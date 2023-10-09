const menu_btn = document.querySelector('.hamburger');
const mobile_menu = document.querySelector('.nav-mobile');

menu_btn.addEventListener('click', function(){
menu_btn.classList.toggle('is-active');
mobile_menu.classList.toggle('is-active');

})

//partner scroll
var copy = document.querySelector(".partners-slide").cloneNode(true);
document.querySelector(".partners").appendChild(copy);
