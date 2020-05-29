$(document).ready(function(){
  $("#menu-button").click(function(){
    $(".content").toggleClass("reduced");
  });
});

function resize() {
if ($(window).width() < 990) {
  $(".nav-item").addClass("col-6");
} else {
  $(".nav-item").removeClass("col-6");
}
}

resize();
$(window).on('resize', resize);