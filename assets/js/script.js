$(document).ready(function() {
    // header menu toggle
    $(".menu_toggleBtn,.header_backDrop").click(function() {
        $(".header .navbar").toggleClass("expand");
    });

    // header background change
    if ($(window).scrollTop() > 60) {
        $(".header").addClass("active_header");
    } else {
        $(".header").removeClass("active_header");
    }
    $(window).on("scroll", function() {
        if ($(window).scrollTop() > 60) {
            $(".header").addClass("active_header");
        } else {
            $(".header").removeClass("active_header");
        }
    });

});
$(window).on('load', function(){
    AOS.init({
        easing: 'ease',
        duration: 1000
    });
});