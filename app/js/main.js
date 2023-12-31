$(function(){ 
  
  $('.product-tabs__top-item').on('click', function(e){
    e.preventDefault();
    $('.product-tabs__top-item').removeClass('product-tabs__top-item--active');
    $(this).addClass('product-tabs__top-item--active');

    $('.product-tabs__content-item').removeClass('product-tabs__content-item--active');
    $($(this).attr('href')).addClass('product-tabs__content-item--active');
  });

  $('.products__select, .product-item__input').styler();

  var $range = $(".filter-price__input");
  var $inputFrom = $(".filter-price__from");
  var $inputTo = $(".filter-price__to");
  var instance;
  var min = 0;
  var max = 1200;
  var from = 0;
  var to = 0;

  $range.ionRangeSlider({
    skin: "round",
    type: "double",
    min: 0,
    max: 1200,
    from: 100,
    to: 1000,
    onStart: updateInputs,
    onChange: updateInputs,
    
  });

  instance = $range.data("ionRangeSlider");

function updateInputs (data) {
	from = data.from;
    to = data.to;
    
    $inputFrom.prop("value", from);
    $inputTo.prop("value", to);	
}

$inputFrom.on("input", function () {
    var val = $(this).prop("value");
    
    
    if (val < min) {
        val = min;
    } else if (val > to) {
        val = to;
    }
    
    instance.update({
        from: val
    });
});

$inputTo.on("input", function () {
    var val = $(this).prop("value");
    
    
    if (val < from) {
        val = from;
    } else if (val > max) {
        val = max;
    }
    
    instance.update({
        to: val
    });
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
      breakpoint: 576,
      settings: {
        dots: false
      },
    },      
  ] 

});

$('.interesting__slider').slick({
  
  
  infinite: false,
  slidesToShow: 5,
  slidesToScroll: 5,
  prevArrow: '<button class="slider__arrow slider__arrow--prev" type="button"><svg class="slider__arrow-icon" width="18" height="18"><use xlink:href="images/sprite.svg#left-icon"></use></svg></button>',
  nextArrow: '<button class="slider__arrow slider__arrow--next" type="button"><svg class="slider__arrow-icon" width="18" height="18"><use xlink:href="images/sprite.svg#left-icon"></use></svg></button>',

  responsive: [
    {
      breakpoint: 993,
      settings: {
        dots: true,
        arrows: false,
        slidesToShow: 4,
        slidesToScroll: 4,
        autoplay: true,
        autoplaySpeed: 2000,        
      },
    }, 
    
    {
      breakpoint: 769,
      settings: {  
        dots: true,
        arrows: false,      
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 2000,               
      },
    }, 

    {
      breakpoint: 576,
      settings: {        
        dots: true,
        arrows: false,
        slidesToShow: 2,
        slidesToScroll: 2,        
      },
    }, 
  ] 

});

const swiper = new Swiper('.product-item__slider', {  
  
  loop: true,
  
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    
    993: {      
      watchOverflow: true,
    }, 
    
  }
  
});

const ratingItemsList = document.querySelectorAll('.comments-rating__item');
const ratingItemArray = Array.prototype.slice.call(ratingItemsList);

document.querySelectorAll('.comments-rating__item').forEach(item =>
  item.addEventListener('click', () => {

    const {itemValue} = item.dataset;
    item.parentNode.dataset.totalValue = item.dataset.itemValue;
  })
);

// const myCarousel = new Carousel(document.querySelector('.product-item__slider'), {
//   preload: 2,
//   Dots: false
// });

Fancybox.bind('[data-fancybox=".product-item__slider"]', {

  // Thumbs: false,
  // Toolbar: false,

  // closeButton: "top",
  // Carousel: {
  //   Dots: true,
  //   on: {
  //     change: (that) => {
  //       myCarousel.slideTo(myCarousel.findPageForSlide(that.page), {
  //         friction: 0,
  //       });
  //     },
  //   },
  // },

});

var mixer = mixitup('.popular-categories__catalog', {

});