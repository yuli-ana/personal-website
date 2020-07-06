const portfolio = {};
const buttonMenu = $('.btn__menu');
const navList = $('.nav__list');


portfolio.toggleMenu = function() {
    buttonMenu.on('click', () => {
        navList.toggle();
    })
}


portfolio.init = function(){
    this.toggleMenu();
}



$(function(){
    portfolio.init();
});