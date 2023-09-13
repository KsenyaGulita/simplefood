$(function(){  

  $('.products__select, .product-item__input').styler();

  $(".filter-price__input").ionRangeSlider({
    type: "double",
    min: 0,
    max: 1200,
    from: 100,
    to: 1000,

    onStart: function (data) {
      $('.filter-price__from').text(data.from);  
      $('.filter-price__to').text(data.to);  
    },
    
    onChange: function (data) {
      $('.filter-price__from').text(data.from);  
      $('.filter-price__to').text(data.to);  
    },
  });

  let headerTop = $('.header');
  let scrollPos = $(window).scrollTop();   

  $(window).on('scroll load resize', function(){
    scrollPos = $(this).scrollTop();
    if (scrollPos > 50) {
      headerTop.addClass('active');
    } else {
      headerTop.removeClass('active');
    }
  });

  $(".product-item__star").rateYo({    
    starWidth: "16px",
    normalFill: "#C1C1C1",
    ratedFill: "#FFB800",
    spacing   : "6px",
    readOnly: true
  });
  
});

document.addEventListener('DOMContentLoaded', () => {  
	
  const burger      = document.querySelector('.burger');
  const burgerClose = document.querySelector('.menu-close');
  const mobileMenu  = document.querySelector('.menu');  
  const bodyLock    = document.querySelector('body');
  const filter      = document.querySelector('.products__btn');
  const filterClose = document.querySelector('.products__filters-close');
  const filterMenu  = document.querySelector('.products__filters');

  burger.addEventListener('click', () => {
    mobileMenu.classList.add('menu--active'); 
    if (mobileMenu.classList.contains('menu--active'))  { 
      bodyLock.classList.add('lock'); 
    }
    else {       
      bodyLock.classList.remove('lock');
    }
  });

  burgerClose.addEventListener('click', () => {
    mobileMenu.classList.remove('menu--active');
    bodyLock.classList.remove('lock');     
  });

  filter.addEventListener('click', () => {
    console.log('yes')
    filterMenu.classList.add('products__filters--active'); 
    if (filterMenu.classList.contains('products__filters--active'))  { 
      bodyLock.classList.add('lock'); 
    }
    else {       
      bodyLock.classList.remove('lock');
    }
  });

  filterClose.addEventListener('click', () => {
    filterMenu.classList.remove('products__filters--active');
    bodyLock.classList.remove('lock');     
  });

  document.addEventListener('click', function (e) {
    if (e.target !== burger && e.target !== mobileMenu && e.target !== filter && e.target !== filterMenu) {      
      mobileMenu.classList.remove('menu--active'); 
      filterMenu.classList.remove('products__filters--active');     
      bodyLock.classList.remove('lock');
    }    
  });

});

$(window).on('load resize', function () {
  if ($(window).width() < 769) {
     $('.best-restaurants__catalog:not(.slick-initialized)').slick({
          arrows: false,
          dots: true,
          infinite: true,
          speed: 1500,
          slidesToShow: 1, 
          slidesToScroll: 1,         
        });
  } else {
     $('.best-restaurants__catalog.slick-initialized').slick('unslick');
  }
});

$(window).on('load resize', function () {
  if ($(window).width() < 769) {
     $('.promotions__list:not(.slick-initialized)').slick({
          arrows: false,
          dots: true,
          infinite: true,
          speed: 1500,
          slidesToShow: 1, 
          slidesToScroll: 1,           
        });
  } else {
     $('.promotions__list.slick-initialized').slick('unslick');
  }
});

$('.reviews__slider').slick({
  dots: true,
  arrows: true,
  infinite: false,
  prevArrow: '<button class="slider__arrow slider__arrow--prev" type="button"><svg class="slider__arrow-icon" width="18" height="18"><use xlink:href="images/sprite.svg#left-icon"></use></svg></button>',
  nextArrow: '<button class="slider__arrow slider__arrow--next" type="button"><svg class="slider__arrow-icon" width="18" height="18"><use xlink:href="images/sprite.svg#left-icon"></use></svg></button>', 

  responsive: [
    {
      breakpoint: 561,
      settings: {
        dots: false
      }
    }      
  ] 

});

const swiper = new Swiper('.product-item__slider', {  
  
  loop: true,
  
  navigation: {
    nextEl: '<div class="arrow-right swiper-button-next"><svg class="arrow-left__icon" width="19" height="32"><use xlink:href="images/sprite.svg#left-icon"></use></svg></div>',
    prevEl: '<div class="arrow-left swiper-button-prev"><svg class="arrow-left__icon" width="19" height="32"><use xlink:href="images/sprite.svg#left-icon"></use></svg></div>',
  },  
  
});

// var mixer = mixitup('.popular-categories__catalog');