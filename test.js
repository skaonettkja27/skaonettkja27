$(document).ready(function() {
    const menuToggle = $('.menu-toggle');
    const navMenu = $('.nav-menu');
    const navLinks = $('.nav-link');

    // Toggle menu mobile
    menuToggle.click(function() {
        $(this).toggleClass('active');
        navMenu.toggleClass('active');
    });

    // Menutup menu mobile saat link diklik
    navLinks.click(function() {
        if (navMenu.hasClass('active')) {
            menuToggle.removeClass('active');
            navMenu.removeClass('active');
        }
        // Smooth scroll to section if it's an anchor link
        const targetId = $(this).attr('href');
        if (targetId.startsWith('#')) {
            $('html, body').animate({
                scrollTop: $(targetId).offset().top - $('.main-nav').outerHeight()
            }, 800);
            return false; // Prevent default jump
        }
    });

    // Animasi saat menggulir (mengubah background navbar)
    $(window).scroll(function() {
        if ($(this).scrollTop() > 50) { // Jika sudah menggulir 50px
            $('.main-nav').addClass('scrolled'); // Tambahkan kelas 'scrolled'
        } else {
            $('.main-nav').removeClass('scrolled'); // Hapus kelas 'scrolled'
        }
    });

    // Memastikan kelas 'scrolled' diterapkan saat halaman dimuat jika sudah digulir
    if ($(window).scrollTop() > 50) {
        $('.main-nav').addClass('scrolled');
    } else {
        $('.main-nav').removeClass('scrolled');
    }
});