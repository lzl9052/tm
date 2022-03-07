$(function (){
    function toggleElevators(){
        if($(document).scrollTop()>=$('.shopping-content').offset().top){
            $('.elevators').stop().fadeIn();
        }else {
            $('.elevators').stop().fadeOut();
        }
    }
    var flag=true;
    $('.elevators li').click(function (){
        flag=false;
        $(this).css('background-color','#ff780f').siblings().css('background-color','white');
        var index=$(this).index();
        var current=$('.shopping-contents-title').eq(index*4).offset().top;
        $('body,html').stop().animate({
            scrollTop:current,
        },function (){
            flag=true;
        });
    });
    $(window).scroll(function (){
        toggleElevators();
        if(flag){
            $('.shopping-contents-title').each(function (i,ele){
                if($(document).scrollTop()>=$(ele).offset().top-10){
                    i=parseInt(i/4);
                    $('.elevators li').eq(i).css('background-color','#ff780f').siblings().css('background-color','white');
                }
            });

        }
    });

});