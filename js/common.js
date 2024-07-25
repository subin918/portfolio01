
$(function() {    
    $("#nav").hover(function(){
      $("#header").addClass("active");
      $(".depth2").fadeIn(100);
    }, function(){        
      $("#header").removeClass("active");
      $(".depth2").fadeOut(100);
    });
    var swiper = new Swiper(".swiper", {
      loop:true,
      autoplay: {
        delay:5000,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
});   