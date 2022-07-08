//window.addEventListener('DOMContentLoaded', () => {
//    const menu = document.querySelector('.header__nav'),
//    menuItem = document.querySelectorAll('.header__nav li'),
//    headerForm = document.querySelectorAll('.header__menu_form a'),
//    hamburger = document.querySelector('.header__hamburger');

//    hamburger.addEventListener('click', () => {
//        hamburger.classList.toggle('header__hamburger_active');
//        menu.classList.toggle('header__nav_active');
//    });

//    menuItem.forEach(item => {
//        item.addEventListener('click', () => {
//            hamburger.classList.toggle('header__hamburger_active');
//            menu.classList.toggle('header__nav_active');
//        })
//    });

//    headerForm.forEach(item => {
//        item.addEventListener('click', () => {
//            hamburger.classList.toggle('header__hamburger_active');
//            menu.classList.toggle('header__nav_active');
//        })
//    })
//})
window.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.burger');
    const menu = document.querySelector('.menu');
    const fixed_wrapper = document.querySelector('.wrapper')

    burger.addEventListener('click', () => {
        burger.classList.toggle('burger_active');
        menu.classList.toggle('menu_active');
        fixed_wrapper.classList.toggle('wrapper_fixed')
    })
})