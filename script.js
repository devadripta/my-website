// Smooth scrolling
$(document).ready(function() {
    $('a[href^="#"]').on('click', function(event) {
      var target = $(this.getAttribute('href'));
      if( target.length ) {
        event.preventDefault();
        $('html, body').stop().animate({
          scrollTop: target.offset().top
        }, 1000);
      }
    });
  });
  
  // Animate header
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.navbar').addClass('animated');
    } else {
      $('.navbar').removeClass('animated');
    }
  });
  
  // Animate project descriptions and profile picture
  $(window).scroll(function() {
    $('.project').each(function() {
      if ($(window).scrollTop() > $(this).offset().top - 400) {
        $(this).addClass('animated');
      }
    });
    if ($(window).scrollTop() > $('#profile').offset().top - 400) {
      $('#profile').addClass('animated');
    }
  });
  
  // Change color of navigation links on hover
  $('.navbar-nav>li>a').hover(function(){
    $(this).css("color", "#fff");
    }, function(){
    $(this).css("color", "#000");
  });
  