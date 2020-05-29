$(document).ready(function(){
    $("#menu-button").click(function(){
      $(".nav-item").toggleClass("col-6");
      $(".content").toggleClass("reduced");
    });
});

function resize() {
  if ($(window).width() < 768) {
    $(".navbar-brand img").attr('src','logobw.png');
  } else {
    $(".navbar-brand img").attr('src','the elecruisers.png');

  }
}
resize();
$(window).on('resize', resize);
