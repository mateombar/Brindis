// Menu-toggle button
$(document).ready(function() {
    $(".menu-icon").on("click", function() {
        $("nav ul").toggleClass("showing");
    });
});
// Scrolling Effect
$(window).on("scroll", function() {
    if($(window).scrollTop()) {
        $('nav').addClass('black');
    }

    else {
        $('nav').removeClass('black');
    }
});

//Card Efect
// $(document).read(function () {
//    $('.col-4-lg').hover(
//        //Trigger when mouse hover
//        function () {
//            $(this).animate({
//                marginTop: "-=10%"
//            },200);
//        },
//        //Trigger when mouse out
//        function () {
//            $(this).animate({
//                marginTop: "0%"
//            },200);
//        }
//    );

// });