const portfolio = {};
portfolio.scrollIndicator = $('.scroll__indicator');
portfolio.scrollHint = $('.scroll__hint--left');
portfolio.offCanvas = $('.offcanvas__wrap');
portfolio.btnContact = $('.btn__contact');
portfolio.btnCircle = $('.btn__circle');
portfolio.buttonMenu = $('.btn__menu');
portfolio.btnAbout = $('.btn__about');
portfolio.navList = $('.nav__list');
portfolio.btnSend = $('.btn__send');
portfolio.header = $('.header');
portfolio.footer = $('.footer');
portfolio.active = $('#about');
portfolio.form = $('.form');
portfolio.html = $('html');


portfolio.toggleMenu = function () {
    this.buttonMenu.on('click', (e) => {
        e.preventDefault();
        this.navList.toggleClass('opacity');
    })
}

portfolio.openContactForm = function () {
    this.btnContact.on('click', () => {

        this.html.animate({ scrollTop: 0 }, "slow", () => {
            this.footer.addClass('offcanvas__visible');
            this.offCanvas.addClass('wrap__right');
            this.buttonMenu.addClass('hide');
            this.header.addClass('flex--start');
            this.scrollIndicator.addClass('left');
        });

    
    })
}

portfolio.closeContactForm = function () {
    this.btnCircle.on('click', () => {
        this.offCanvas.removeClass('wrap__right');
        this.footer.removeClass('offcanvas__visible');
        this.buttonMenu.removeClass('hide');
        this.header.removeClass('flex--start');
        this.scrollIndicator.removeClass('left');
    })
}


portfolio.handleButtonAbout = function () {
    this.btnAbout.on('click', () => {
        this.scrollHint.text(this.active.data('letter'));
        if (this.active.length > 0) {
            console.log(this.active);
            this.html.animate({
                scrollTop: this.active.offset().top,
            },
                'slow',
                () => {
                    this.active = this.active.next();
                })
        } else {
            this.html.animate({
                scrollTop: 0,
            }, "fast", () => {
                this.active = $('#about');
                this.scrollHint.text('a');
            })
        }
    })
}

portfolio.closeOnScroll = function () {
    $(window).on('scroll', () => {
        const scroll = $(window).scrollTop();
        const footerHasClass = this.footer.hasClass('offcanvas__visible');
        const offCanvasHasClass = this.offCanvas.hasClass('wrap__right');

        if (scroll >= 100 && footerHasClass && offCanvasHasClass) {
            this.footer.removeClass('offcanvas__visible');
            this.offCanvas.removeClass('wrap__right');
            this.header.removeClass('flex--start');
            this.scrollIndicator.removeClass('left');
        }
    })
}

portfolio.submitForm = function () {
    this.form.on('submit', (e) => {
        e.preventDefault();
    })
    // Clear input values when user clicks close footer
}

portfolio.init = function () {
    this.handleButtonAbout();
    this.closeContactForm();
    this.openContactForm();
    this.closeOnScroll();
    this.submitForm();
    this.toggleMenu();
}


$(function () {
    portfolio.init();
});