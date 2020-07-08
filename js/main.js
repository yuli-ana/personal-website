const portfolio = {};
const buttonMenu = $('.btn__menu');
const navList = $('.nav__list');
const btnContact = $('.btn__contact');


portfolio.toggleMenu = function () {
    buttonMenu.on('click', (e) => {
        e.preventDefault();
        navList.toggleClass('opacity');
    })
}

portfolio.openContact = () => {
    btnContact.on('click', function () {
        $('.offcanvas__wrap').addClass('wrap__right');
        $('.footer').addClass('offcanvas__visible');
        buttonMenu.addClass('hide');
        $('.header').addClass('flex--start');
        $('.scroll__indicator').addClass('left');
        $("html, body").animate({ scrollTop: 0 }, "slow");
    })
}

portfolio.closeContact = () => {
    $('.btn__circle').on('click', function () {
        $('.offcanvas__wrap').removeClass('wrap__right');
        $('.footer').removeClass('offcanvas__visible');
        buttonMenu.removeClass('hide');
        $('.header').removeClass('flex--start');
        $('.scroll__indicator').removeClass('left');
    })
}

portfolio.scroll = () => {
    $('.btn__about').on('click', function () {
        $('html,body').animate({
            scrollTop: $('.about').offset().top
        },
            'slow');
    });
}


portfolio.init = function () {
    this.closeContact();
    this.openContact();
    this.toggleMenu();
    this.scroll();
    this.chart();
}


$(function () {
    portfolio.init();
});