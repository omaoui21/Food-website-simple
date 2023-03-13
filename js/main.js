let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu.onclick = function(){
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active')
}

function loader(){
    document.querySelector('.loader-container').classList.add('fade-out')
}
function fadeOut(){
    setInterval(loader,3000);
}
window.onload=fadeOut();