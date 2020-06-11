$(document).ready(function(){
    $(".car-more").click(function(){
        $(this).parent().next(".car-slide").slideDown("slow");
    });
  
    $(".car-less").click(function(){
        $(".car-slide").hide();
    });


});
