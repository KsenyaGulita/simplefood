$(function(){
  
  

});

$('.slider').slick({
  dots: true,
  arrows: true,
  prevArrow: '<button class="slider__arrow slider__arrow--prev" type="button"><svg class="slider__arrow-icon" width="18" height="18"><use xlink:href="images/sprite.svg#left-icon"></use></svg></button>',
  nextArrow: '<button class="slider__arrow slider__arrow--next" type="button"><svg class="slider__arrow-icon" width="18" height="18"><use xlink:href="images/sprite.svg#right-icon"></use></svg></button>',
  
  
});

var mixer = mixitup('.popular-categories__catalog');