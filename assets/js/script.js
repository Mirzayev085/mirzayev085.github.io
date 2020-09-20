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



    // Portfolio Grid Sort starts

    var $grid = $('.sharur-portfolio-grid').isotope({
        itemSelector: '.sharur-portfolio-item',
        layoutMode: 'fitRows'
    });
    var filterFns = {
        numberGreaterThan50: function() {
            var number = $(this).find('.number').text();
            return parseInt(number, 10) > 50;
        },
        ium: function() {
            var name = $(this).find('.name').text();
            return name.match(/ium$/);
        }
    };
    $('.filters-button-group').on('click', 'button', function() {
        var filterValue = $(this).attr('data-filter');
        filterValue = filterFns[filterValue] || filterValue;
        $grid.isotope({ filter: filterValue });
    });
    $('.button-group').each(function(i, buttonGroup) {
        var $buttonGroup = $(buttonGroup);
        $buttonGroup.on('click', 'button', function() {
            $buttonGroup.find('.is-checked').removeClass('is-checked');
            $(this).addClass('is-checked');
        });
    });

    // Portfolio Grid Sort Ends

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
    if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
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