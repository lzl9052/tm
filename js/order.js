$(function (){
    $('.order-title span').click(function (){
        $(this).addClass('order-title-hover');
        $(this).siblings().removeClass('order-title-hover');
    });
    $('.order-title span[pid=100]').click(function (){
        $('.order-content').show();
    });
    $('.order-title span[pid=101]').click(function (){
        $('.order-content').each(function (){
            var orderStatus=$(this).attr('orderStatus');
            if(orderStatus=="waitingPay") {
                $('.order-content').hide();
                $('.order-content[orderStatus="waitingPay"]').show();
            }
        })
    });
    $('.order-title span[pid=102]').click(function (){
        $('.order-content').each(function (){
            var orderStatus=$(this).attr('orderStatus');
            if(orderStatus=="waitingFh"){
                $('.order-content').hide();
                $('.order-content[orderStatus="waitingFh"]').show();
            }
        })
    });
    $('.order-title span[pid=103]').click(function (){
        $('.order-content').each(function (){
            var orderStatus=$(this).attr('orderStatus');
            if(orderStatus=="waitingSh"){
                $('.order-content').hide();
                $('.order-content[orderStatus="waitingSh"]').show();
            }
        })
    });
    $('.order-title span[pid=104]').click(function (){
        $('.order-content').each(function (){
            var orderStatus=$(this).attr('orderStatus');
            if(orderStatus=="waitingPj"){
                $('.order-content').hide();
                $('.order-content[orderStatus="waitingPj"]').show();
            }
        })
    });
});