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

portfolio.scroll = () => {
    $('.btn__about').on('click', function() {
        $('html,body').animate({
            scrollTop: $('.about').offset().top},
            'slow'); 
    });
}


// portfolio.chart = () => {
//     AmCharts.makeChart("chart", {
//         "type": "pie",
//         "titleField": "title",
//         "valueField": "value",
//         "labelRadius": -130,
//         "radius": "42%",
//         "innerRadius": "60%",
//         "labelText": "[[title]]"
//       });
// }

portfolio.init = function(){
    this.toggleMenu();
    this.toggleContact();
    this.scroll();
    this.chart();
}


$(function(){
    portfolio.init();
});