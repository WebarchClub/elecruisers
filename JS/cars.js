$(document).ready(function(){
    $(".car-more").click(function(){
        $(this).parent().next(".car-slide").slideToggle("slow");
    });
    $(".car-less").click(function(){
        $(this).parent().slideToggle("slow");
    });
});