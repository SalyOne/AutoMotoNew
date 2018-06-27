$(document).ready(function() {
    $(window).scroll(function() {
        if($(document).scrollTop() > 50) {
            $('.main-top').addClass('nav50')
        }
        else {
            $('.main-top').removeClass('nav50')
        }
    });
});