var mixer = mixitup('.portfolio-gallery');

$('#testimonial-carousel').owlCarousel({
    autoplay: true,
    dots: false,
    nav: true,
    loop: true,
    navText: ['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>'],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:2
        }
    }
})


$(function(){
    $('.menu-item a').on('click', function(){
      $('html,body').animate({
          scrollTop: $($.attr(this, 'href')).offset().top
      }, 1000);
      return false;
  })
});


//sticky menu

$(window).on('scroll', function(){
    if($(window).scrollTop()){
        $('nav').addClass('sticky');
    }else {
        $('nav').removeClass('sticky');
    }
});


//Preloder



$.LoadingOverlay("show")

setTimeout(function(){
    $.LoadingOverlay("hide");
}, 1500);




