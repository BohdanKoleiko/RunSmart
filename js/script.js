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
    const burger        = document.querySelector('.burger');
    const menu          = document.querySelector('.menu');
    const fixed_wrapper = document.querySelector('.wrapper');

    burger.addEventListener('click', () => {
        burger.classList.toggle('burger_active');
        menu.classList.toggle('menu_active');
        fixed_wrapper.classList.toggle('wrapper_fixed')
    })
})

$(document).ready(function(){
    $('ul.catalog__tabs-menu').on('click', 'li:not(.catalog__tabs-item_active)', function() {
        $(this)
          .addClass('catalog__tabs-item_active').siblings().removeClass('catalog__tabs-item_active')
          .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
    });

    //code for more inforamtion
    //$('.catalog__more-link').each(function(i) {
    //    $(this).on('click', function(e) {
    //        e.preventDefault();
    //        $('.catalog__card-item').eq(i).toggleClass('catalog__card-item_active');
    //        $('.catalog__card-descr').eq(i).toggleClass('catalog__card-descr_active');
    //    })
    //});

    //$('.catalog__back-link').each(function(i) {
    //    $(this).on('click', function(e) {
    //        e.preventDefault();
    //        $('.catalog__card-item').eq(i).toggleClass('catalog__card-item_active');
    //        $('.catalog__card-descr').eq(i).toggleClass('catalog__card-descr_active');
    //    })
    //});
    //end code

    //a short version of the code above
    function toggleSlide(link) {
        $(link).each(function(i) {
            $(this).on('click', function(e) {
                e.preventDefault();
                $('.catalog__card-item').eq(i).toggleClass('catalog__card-item_active');
                $('.catalog__card-descr').eq(i).toggleClass('catalog__card-descr_active');
            })
        });
    };

    toggleSlide('.catalog__more-link');
    toggleSlide('.catalog__back-link');
    //end code
})