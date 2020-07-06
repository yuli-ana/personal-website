const portfolio = {};
const buttonMenu = $('.btn__menu');
const navList = $('.nav__list');
const btnContact = $('.btn__contact');


portfolio.toggleMenu = function() {
    buttonMenu.on('click', () => {
        navList.toggle();
    })
}

portfolio.toggleContact = () => {
    btnContact.on('click', function(){
        $('.offcanvas__wrap').toggleClass('wrap__right');
        $('.footer').toggleClass('offcanvas__visible');
    })
}


portfolio.init = function(){
    this.toggleMenu();
    this.toggleContact();
}



$(function(){
    portfolio.init();
});