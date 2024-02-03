


// scroll header
function scrollHeader(){
    const nav = document.getElementById('header');

    if(this.scrollY >= 50){
        nav.classList.add('active-header');
    }else{
        nav.classList.remove('active-header');
    }
}

window.addEventListener('scroll', scrollHeader);

// dropdown menu
const menuDropdown1 = document.getElementById('dropdown-1');
const menuDropdown2 = document.getElementById('dropdown-2');
const menuDropdown3 = document.getElementById('dropdown-3');

const menuItem1 = document.getElementById("menu-item-1");
const menuItem2 = document.getElementById("menu-item-2");
const menuItem3 = document.getElementById("menu-item-3");



function showDropdown1(event){
    event.preventDefault();
    menuDropdown1.classList.toggle('active-dropdown-menu');
    menuDropdown2.classList.remove('active-dropdown-menu');
    menuDropdown3.classList.remove('active-dropdown-menu');
}

function showDropdown2(event){
    event.preventDefault();
    menuDropdown1.classList.remove('active-dropdown-menu');
    menuDropdown2.classList.toggle('active-dropdown-menu');
    menuDropdown3.classList.remove('active-dropdown-menu');
}

function showDropdown3(event){
    event.preventDefault();
    menuDropdown1.classList.remove('active-dropdown-menu');
    menuDropdown2.classList.remove('active-dropdown-menu');
    menuDropdown3.classList.toggle('active-dropdown-menu');
}

function removeDropdown(){
    menuDropdown1.classList.remove('active-dropdown-menu');
    menuDropdown2.classList.remove('active-dropdown-menu');
    menuDropdown3.classList.remove('active-dropdown-menu');
}

menuItem1.addEventListener('click', showDropdown1);
menuItem2.addEventListener('click', showDropdown2);
menuItem3.addEventListener('click', showDropdown3);


menuDropdown1.addEventListener('mouseleave', removeDropdown);
menuDropdown2.addEventListener('mouseleave', removeDropdown);
menuDropdown3.addEventListener('mouseleave', removeDropdown);



// menu mobile

const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId);
    const nav = document.getElementById(navId);

    if(toggle && nav){
        toggle.addEventListener('click', () => {
            nav.classList.toggle('active-menu-mobile');
            toggle.classList.toggle('active-bx');
        })
    }
}

showMenu('bx', 'menu-mobile');