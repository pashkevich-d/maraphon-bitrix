$(document).ready(function() {
    $('[data-modal=registration]').on('click', function() {
        $('.overlay, #registration').fadeIn('slow');
    });
    $('.header__call').on('click', function() {
        $('.overlay, #registration').fadeIn('slow');
    });
    $('.modal__close').on('click', function() {
        $('.overlay, #registration, #thanks').fadeOut('fast');
    });
    $('.burger').on('click', function() {
        var x = document.querySelector("#myLinks");
        if (x.style.display === "block") {
            x.style.display = "none";
        } else {
            x.style.display = "block";
        }
    });
});
