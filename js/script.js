// sections selecters
const navbar = document.querySelector('.navbar');
const home = document.querySelector('#home');
const about = document.querySelector('#about');
const menu = document.querySelector('#menu');
const contact = document.querySelector('#contact');

const shareIcone = document.querySelector('#share-icone path');
const navbarLogo = document.querySelectorAll('#white path');
const navbarToggler = document.querySelector('.navbar-toggler');
const navbarTogglerBtn = document.querySelector('.navbar-toggler img');
const navbarText = document.querySelectorAll('.navbar ul a');
const navbarZig = document.querySelector('.zig');

navbarToggler.onclick = () => {
    if (navbarTogglerBtn.getAttribute('src') == "images/navbar/hamburger.svg" || navbarTogglerBtn.getAttribute('src') == "images/navbar/hamburger-red.svg") {
        navbarWhite("images/navbar/close-hamburger.svg");
        navbar.classList.add('navbar-shadow');
    }
    else {
        if (window.scrollY <= about.offsetTop - 200) {
            setTimeout(navbarTransperant, 250)
            navbar.classList.remove('navbar-shadow');
        }
        else
            navbarTogglerBtn.setAttribute('src', "images/navbar/hamburger-red.svg");
    }
}

window.onscroll = () => {
    if (window.scrollY >= about.offsetTop - 200 && navbarTogglerBtn.getAttribute('src') != "images/navbar/close-hamburger.svg") {
        navbarWhite("images/navbar/hamburger-red.svg");
        navbar.classList.add('navbar-shadow');
    }
    if (window.scrollY <= about.offsetTop - 200 && navbarTogglerBtn.getAttribute('src') != "images/navbar/close-hamburger.svg") {
        navbarTransperant();
        navbar.classList.remove('navbar-shadow');
        navbarZig.classList.add('d-lg-block');
    }

    const sections = document.querySelectorAll('.section');
    const zigs = document.querySelectorAll('.zig');
    const smZigs = document.querySelectorAll('#Path_4249');
    sections.forEach(function (value, i) {
        if (window.scrollY >= value.offsetTop - 200) {
            zigs.forEach(y => y.classList.remove('d-lg-block'));
            zigs[i].classList.add('d-lg-block');
            
            smZigs.forEach(y => y.style.fill = '#fecf00');
            smZigs[i].style.fill = '#be1f25';
        }
    })
}

function navbarWhite(hum) {
    navbar.classList.add('bg-white');
    shareIcone.style.fill = '#BE1F25';
    navbarTogglerBtn.setAttribute('src', hum);
    navbarText.forEach(x => {
        x.classList.remove('text-white');
        x.style.color = '#707070';
    })
    navbarLogo.forEach(x => {
        x.style.fill = '#8E8E8E'
    })
}

function navbarTransperant() {
    navbar.classList.remove('bg-white');
    shareIcone.style.fill = '#fff';
    navbarTogglerBtn.setAttribute('src', "images/navbar/hamburger.svg");
    navbarText.forEach(x => {
        x.style.color = '#fff';
    })
    navbarLogo.forEach(x => {
        x.style.fill = '#fff'
    })
}
