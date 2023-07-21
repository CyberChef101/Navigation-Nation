const menuBar = document.getElementById('menu-bars');
const overlay =document.getElementById('overlay');
const nav1 = document.getElementById('nav-1');
const nav2= document.getElementById('nav-2');
const na3 = document.getElementById('nav-3');
const nav4 = document.getElementById('nav-4');
const na5 = document.getElementById('nav-5');

function toggleNav() {
    //toggle: menu bars open closed
    menuBar.classList.toggle('change');
    // toggling menu active
    overlay.classList.toggle('overlay-active');
    if (overlay.classList.toggle('overlay-active')) {
        //animation In-delay
        overlay.classList.remove('overlay-slide-left');
        overlay.classList.add('overlay-slide-right');
    } else {
        //animate out-delay
        overlay.classList.remove('overlay-slide-right');
        overlay.classList.add('overlay-slide-left');
    }
}

//event listners
menuBar.addEventListener('click' , toggleNav);
nav1.addEventListener('click' , toggleNav);
nav2.addEventListener('click' , toggleNav);
nav3.addEventListener('click' , toggleNav);
nav4.addEventListener('click' , toggleNav);
nav5.addEventListener('click' , toggleNav);