$(document).ready(function(){
    $("#menu-button").click(function(){
      $(".content").toggleClass("reduced");
    });
});

function resize() {
  if ($(window).width() < 990) {
    $(".navbar-brand img").attr('src','logobw.png');
    $(".nav-item").addClass("col-6");
  } else {
    $(".navbar-brand img").attr('src','the elecruisers.png');
    $(".nav-item").removeClass("col-6");
  }
}

resize();
$(window).on('resize', resize);
// 
