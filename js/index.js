
$(document).ready(function(){

  // slider gage
    var $slider = $('.event_slick');
    var $progressBar = $('.progressbar');
    var $progressBarLabel = $( '.slider__label' );
    
    $slider.on('beforeChange', function(event, slick, currentSlide, nextSlide) {   
      var calc = ( (nextSlide) / (slick.slideCount-1) ) * 100;
      
      $progressBar.css('background-size', calc + '% 100%').attr('aria-valuenow', calc );
      
      $progressBarLabel.text( calc + '% completed' );
    });
    
  //  room change
  var $Lroombtn = $('.room_wrap .left_room .room_img .room_btn span');
  var $Rroombtn = $('.room_wrap .right_room .room_img .room_btn span');
  var $Lroomimg = $('.room_wrap .left_room .room_img .room');
  var $Rroomimg = $('.room_wrap .right_room .room_img .room');

  $Lroombtn.on('click',function(){

    var idx = $(this).index();
    $Lroombtn.removeClass('on');
    $Lroombtn.eq(idx).addClass('on');
    $Lroomimg.fadeOut(500);
    $Lroomimg.eq(idx).fadeIn(500);

  });

  $Rroombtn.on('click',function(){

    var idx = $(this).index();
    $Rroombtn.removeClass('on');
    $Rroombtn.eq(idx).addClass('on');
    $Rroomimg.fadeOut(500);
    $Rroomimg.eq(idx).fadeIn(500);
  });
// header fixed

var $header = $(".header").offset().top;
$(window).scroll(function() {
  var window = $(this).scrollTop();

  if($header < window) {
    $('.header').addClass("alt");
  } else {
    $('.header').removeClass("alt");
  }

});

var $top_header = $(".top_header").offset().top;
$(window).scroll(function() {
  var window = $(this).scrollTop();

  if($top_header < window) {
    $('.top_header').addClass("alt");
  } else {
    $('.top_header').removeClass("alt");
  }

});

// hamslide_wrap
$('.ham_menu').on('click', function(){
  $('.hamslide_wrap').addClass('on');
  $('.hamslide_bg').fadeIn(100);
});

$('.hamslide_wrap .ham_submenu > li > a').on('click', function(){

  $('.hamslide_wrap .ham_submenu > li > ul').slideUp();

  if($(this).next().css("display") == "none"){

    $(this).next().slideDown(300);
  }else{
    $(this).next().slideUp(300);
  }

});


$('.ham_close').on('click', function(){
  $('.hamslide_wrap').removeClass('on');
  $('.hamslide_bg').fadeOut(100);
});

$('.hamslide_bg').on('click', function(){
  $('.hamslide_wrap').removeClass('on');
  $('.hamslide_bg').fadeOut(100);
});
    
});