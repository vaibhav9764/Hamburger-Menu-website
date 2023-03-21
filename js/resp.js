burger = document.getElementById("icon");

navbar = document.getElementsByClassName("navbar");
navList = document.getElementsByClassName("nav-list");
rightNav = document.getElementsByClassName("right-nav");
bt = document.getElementsByClassName("btn");
burger.addEventListener('click', () => {
    rightNav[0].classList.toggle('v-class');
    navList[0].classList.toggle('v-class');
    navbar[0].classList.toggle('h-nav');
})

