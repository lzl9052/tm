$(function (){
    $('.tb,.tbb').mouseover(function () {
        $('.tb').addClass('shopping-listshow');
        $('.tbb').addClass('tb2');
    });
    $('.tb,.tbb').mouseleave(function () {
        $('.tb').removeClass('shopping-listshow');
        $('.tbb').removeClass('tb2');
    });
    $('.collection,.collect').mouseover(function () {
        $('.collection').addClass('shopping-listshow');
        $('.collect').addClass('tb2');
    });
    $('.collection,.collect').mouseleave(function () {
        $('.collection').removeClass('shopping-listshow');
        $('.collect').removeClass('tb2');
    });
    $('.phone-edition,.phone,.phone-button').mouseover(function () {

        $('.phone').addClass('tb2');
    });
    $('.phone-edition,.phone,.phone-button').mouseleave(function () {

        $('.phone').removeClass('tb2');
    });
    $('.sz,.contact').mouseover(function () {
        $('.sz').addClass('shopping-listshow');
        $('.contact').addClass('tb2');
    });
    $('.sz,.contact').mouseleave(function () {
        $('.sz').removeClass('shopping-listshow');
        $('.contact').removeClass('tb2');
    });
});