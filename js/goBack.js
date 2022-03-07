$(window).scroll(function (){
    if($(document).scrollTop()>300){
        $('.goBack').show();
    }else {
        $('.goBack').hide();
    }
});

$('.goBack').click(function (){
    $('body,html').stop().animate({
        scrollTop:0,
    });
});