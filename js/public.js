$(function(){
    $('.tb,.tbb').on({
        mouseover:function (){
            $('.tb').addClass('shopping-listshow');
            $('.tbb').show();
        },
        mouseleave:function (){
            $('.tb').removeClass('shopping-listshow');
            $('.tbb').hide();
        }
    });
    $('.collection,.collect').on({
        mouseover:function (){
            $('.collection').addClass('shopping-listshow');
            $('.collect').show();
        },
        mouseleave:function (){
            $('.collection').removeClass('shopping-listshow');
            $('.collect').hide();
        }
    });
    $('.phone-edition,.phone,.phone-button').on({
        mouseover:function (){
            $('.phone').show();
        },
        mouseleave:function (){
            $('.phone').hide();
        }
    });
    $('.sz,.contact').on({
        mouseover:function (){
            $('.sz').addClass('shopping-listshow');
            $('.contact').show();
        },
        mouseleave:function (){
            $('.sz').removeClass('shopping-listshow');
            $('.contact').hide();
        }
    });
});