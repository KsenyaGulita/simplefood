$(function(){

  $('.menu__btn, .menu__link').on('click', function(){
    $('.menu__list, .menu__btn').toggleClass('active');
    $('body').toggleClass('lock');
  }); 
  

  $(window).on("scroll", function() {
    $('.header').toggleClass("active", $(this).scrollTop() > 0);
  }); 
  // $(".menu__link, .logo, .header__content-link").on("click", function (event) {

  //   event.preventDefault();
  //   const scrollAnchor = $(this).attr("href");
  //   let scrollPoint = $(scrollAnchor).offset().top;    

  //   if (scrollAnchor === "#works") {
  //     scrollPoint = scrollPoint - 100;
  //   }    
  
  //   $("html,body").animate(
  //     {
  //       scrollTop: scrollPoint,
  //     },
  //     1500
  //   );
  //   return false;
  
  // });

     
  
});


document.addEventListener('DOMContentLoaded', () => {  
	
  const burger = document.querySelector('.burger');
  const menuList = document.querySelector('.header__list');
  const body = document.querySelector('body'); 

  burger.addEventListener('click', () => {

  burger.classList.toggle('burger--active');
  menuList.classList.toggle('header__list--active');
  body.classList.toggle('lock');

  });
});


$('.slider').slick({
  dots: true,
  arrows: true,
  infinite: false,
  prevArrow: '<button class="slider__arrow slider__arrow--prev" type="button"><svg class="slider__arrow-icon" width="18" height="18"><use xlink:href="images/sprite.svg#left-icon"></use></svg></button>',
  nextArrow: '<button class="slider__arrow slider__arrow--next" type="button"><svg class="slider__arrow-icon" width="18" height="18"><use xlink:href="images/sprite.svg#left-icon"></use></svg></button>',  
});

var mixer = mixitup('.popular-categories__catalog');