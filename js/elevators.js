$(function (){
    function toggleElevators(){
        if($(document).scrollTop()>=$('.shopping-content').offset().top){
            $('.elevators').stop().fadeIn();
        }else {
            $('.elevators').stop().fadeOut();
        }
    }
    var flag=true;
    $(window).scroll(function (){
        if($(document).scrollTop()>300){
            $('.goBack').show();
        }else {
            $('.goBack').hide();
        }
        toggleElevators();

        if(flag){
            $('.shopping-contents-title').each(function (i,ele){
                if($(document).scrollTop()>=$(ele).offset().top){
                    i=parseInt(i/4);
                    $('.elevators li').eq(i).css('background-color','#ff780f').siblings().css('background-color','white');
                }
            });
        }

    });
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
    $('.goBack').click(function (){
        $('body,html').stop().animate({
            scrollTop:0,
        });
    });
});