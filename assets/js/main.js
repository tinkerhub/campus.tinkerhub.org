/////////////////////////////////////////////////////
// Mobile menu
const openBtn = document.querySelector(".open-btn")
const nav_list = document.querySelector(".navigation__list")
const overlay = document.querySelector(".overlay")
const navContact = document.querySelector(".nav-contact")

function mobileMenu() {
    openBtn.classList.toggle("active");
    nav_list.classList.toggle("active")
    overlay.classList.toggle("hidden")
    navContact.classList.toggle("hidden")
}

openBtn.addEventListener("click", mobileMenu)
overlay.addEventListener("click", mobileMenu)

//// faq

$(document).ready(function () {
    $('.accordion .accordion__link').click(function () {
        $(this).toggleClass('active');
        $(this).next('.content').slideToggle(400);
    });
});

// //////////////////
//GALLERY
$('.single-gallery-item .popup-btn').magnificPopup({
    type: 'image',
    gallery: {
        enabled: true
    }
})


///////////////////////////////////////
// Navbar scroll

$(window).on('scroll', function () {
    if ($(window).scrollTop() > 200) {
        $('#navbar').addClass('sticky')
    } else {
        $('#navbar').removeClass('sticky')

    }

});