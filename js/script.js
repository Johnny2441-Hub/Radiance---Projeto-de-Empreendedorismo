$(document).ready(function () {
    $(window).scroll(function () {
        // Mudar menu quando descer a tela
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }

        // botão de subir página mostrar/esconder script
        if (this.scrollY > 100) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }

        $('.nav li').click(function () {
            var pos = $('.' + this.dataset.id).position().top;
            $('html, body').animate({
                scrollTop: pos
            }, 1000);
        });
    });

    $('.scroll-up-btn').click(function () {
        $('html').animate({ scrollTop: 0 });

        $('html').css("scrollBehavior", auto);
    });
    //menu script para mobile
    $('.menu-btn').click(function () {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn').toggleClass("active");
    });

    $('.navbar .menu li a').click(function () {
        $('html').css("scrollBehavior", "smooth");
    });

    $('carousel').owlCarousel
});
