const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu');
const fixedWrapper = document.querySelector('.wrapper');
const arrowTop = document.querySelector('.arrow-back-top');


function showScrollTopBtn() {
   if (document.documentElement.scrollTop > 1160) {
      return arrowTop.style.display = 'block';
   } else {
      return arrowTop.style.display = 'none';
   }
}

showScrollTopBtn();

window.addEventListener('DOMContentLoaded', () => {
   burger.addEventListener('click', () => {
      burger.classList.toggle('burger_active');
      menu.classList.toggle('menu_active');
      fixedWrapper.classList.toggle('wrapper_fixed');
   });
});

window.addEventListener('scroll', () => {
   showScrollTopBtn();
});

arrowTop.addEventListener("click", () => {
   window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
   })
})

$(document).ready(function () {
   $('ul.catalog__tabs-menu').on('click', 'li:not(.catalog__tabs-item_active)', function () {
      $(this)
         .addClass('catalog__tabs-item_active').siblings().removeClass('catalog__tabs-item_active')
         .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active')
         .eq($(this).index()).addClass('catalog__content_active');
   });

   function toggleSlide(link) {
      $(link).each(function (i) {
         $(this).on('click', function (e) {
            e.preventDefault();
            $('.catalog__card-item').eq(i).toggleClass('catalog__card-item_active');
            $('.catalog__card-descr').eq(i).toggleClass('catalog__card-descr_active');
         });
      });
   }

   toggleSlide('.catalog__more-link');
   toggleSlide('.catalog__back-link');

   // Modal
   // Отримую елемент по атребуту data-modal, цей атрибут придуманий мною, і при натисканні на цю кнопку 
   // я відкриваю блок overlay і вікно callback
   $('[data-modal=callback]').on('click', function () {
      $('.overlay, .callback').fadeIn(300);
      $('body').css('overflow', 'hidden');
   });
   //При натисканні на блок modal__close я буду закривати overlay, #callback, #order і #thank
   $('.modal__close').on('click', function () {
      $('.overlay, .callback, .order, .thank').fadeOut(300);
      $('body').css('overflow', 'unset');
   });
   //При натисканні на кнопку catalog__buy-button я показую .overlay і #order вікна
   $('.catalog__buy-button').on('click', function () {
      $('.overlay, .order').fadeIn(300);
      $('body').css('overflow', 'hidden');
   });
   //Для вставляння назви товара який замовляється
   $('.catalog__buy-button').each(function (i) {
      $(this).on('click', function () {
         $('.order .modal__subtitle').text($('.catalog__header').eq(i).text());
      });
   });
});
