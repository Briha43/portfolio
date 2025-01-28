
const navbarA= document.querySelectorAll('.navbar a');
const navbar = document.querySelector('.navbar');

const menu=document.querySelector('#menu-icon');
console.log(menu);

// Toggle navbar visibility
menu.onclick = () => {
    menu.classList.toggle('bx-x'); // Toggle menu-icon animation (e.g., cross icon)
    navbar.classList.toggle('active'); // Show or hide the navbar
};


const sections= document.querySelectorAll('section');

let currSec='home';
window.addEventListener('scroll', ()=>
{
sections.forEach(sec => {
    if(window.scrollY >= (sec.offsetTop-300))
    {
        currSec=sec.id;
        console.log(currSec);
    }
});

navbarA.forEach(nav => {
    nav.classList.remove('active');
});

navbarA.forEach( nav=>{
    if(nav.href.includes(currSec))
    {
        // document.querySelector('.hom').classList.remove('active');
        nav.classList.add('active');
    }
})
});
//changing mode on toggle button click
// function toggle() {
//     var element = document.querySelector('body');
//     element.classList.toggle("white-mode");

// }

