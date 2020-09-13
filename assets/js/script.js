$(document).ready(function() {

    // Configuring Testimonials Slider
    $('.testimonial-slider').slick({
        autoplay: true,
        autoplaySpeed: 2000,
    });
    // Configuring Testimonials Slider ends

    // Configuring Owl Carousel in Our Customers section
    $(".owl-carousel").owlCarousel({
        loop: true,
        margin: 10,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                loop: true,
                autoplay: true
            },
            600: {
                items: 2,
                loop: true,
                autoplay: true
            },
            1000: {
                items: 3,
                loop: false,
                autoplay: true
            }
        }
    });
    // Configuring Owl Carousel in Our Customers section ends

});

// Configuring Hamburger menu 
$(".myhamburger-wrapper").on('click', function() {
    $(".menu-links").slideToggle();
});
// Configuring Hamburger menu ends


//Initializind Animate On Scroll
AOS.init();
//Initializind Animate On Scroll ends


// Starting counter in About Us section
$('.counter').counterUp();
//End of counter


// Scroll to top configuration starts
window.onscroll = function isScrolled() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        $(".scroll-to-top").css("display", "grid");
        $('header').css("background", "#1E88E5");
    } else {
        $(".scroll-to-top").css("display", "none");
        $('header').css("background", "transparent")
    }
};

$(".scroll-to-top").on("click", function() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});
// Scroll to top configuration ends