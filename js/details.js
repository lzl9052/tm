function details(){
    $('.pj').click(function (){
        $('.pj-content').show();
        $('.details-shopping').hide();
        $('.pj').addClass('shopping-hover');
        $('.shopping-detalis').removeClass('shopping-hover');
        $('.triangle2').show();
        $('.triangle').hide();
    });
    $('.shopping-detalis').click(function (){
        $('.pj-content').hide();
        $('.details-shopping').show();
        $('.pj').removeClass('shopping-hover');
        $('.shopping-detalis').addClass('shopping-hover');
        $('.triangle2').hide();
        $('.triangle').show();

    });
    $('.divide-list').click(function (){
        $('.divide-sale').toggleClass('divide-show');
        var period=$(this).attr('period');
        $('.divide-list[period='+period+']').toggleClass('list-show');
        $('.divide-list[period='+period+']').siblings().removeClass('list-show');
        if($('.divide-list').hasClass('list-show')){
            $('.divide-sale').addClass('divide-show');
            $('.paying').html('分期购买');
        }else {
            $('.paying').html('立即购买');
        }
        if(period==3){
            $('.another-sale').html('(0首付、0手续费)');
            $('.another-sale').css('background-color','white');
        }else if(period==6){
            $('.another-sale').html('(单利年化利率约为15.3%)');
            $('.another-sale').css('background','none');
        }else if(period==12){
            $('.another-sale').html('(单利年化利率约为13.6%)');
            $('.another-sale').css('background-','none');
        }else if(period==24){
            $('.another-sale').html('(单利年化利率约为13.8%)');
            $('.another-sale').css('background','none');
        }
        var value=$('.input-number').val();
        if(value==0){
            value=1;
        }
        var price=$('.sale-price').attr('price');
        price=price*value;
        $('.mouth-sale').html(period);
        $('.divide-pales[period]').attr('period',period);
        periodshow(period,price);

    });

    $('.joinCart').click(function (){
        $('.joinCart').css('background-color','grey');
        $('.joinCart').html('已加入购物车');
        $('.joinCart').css('cursor','inherit');
    })

    //正在输入
    $('.input-number').focus(function (){
        this.value=this.value.replace(/[^\d]/g,'');
        //键盘弹起，如果输入的数量超过库存，马上将输入的值改为最大库存,弹出警告框
        $('.input-number').keyup(function (){
            var value=$('.input-number').val();
            this.value=this.value.replace(/[^\d]/g,'');

            if(this.value==0){
                var price=$('.sale-price').attr('price');
                value=1;
                price=price*value;
                paymoney(price);
            }
            value=Number(value);
            var restore=$('.restore').html();

            if(value>restore){
                value=restore;
                this.value=restore;
                alert('不能超过最大库存量！');
            }
            var price=$('.sale-price').attr('price');
            price=price*value;
            paymoney(price);
        });
    });

    //失去焦点,利用正则表达式使输入的值合法，如果值为0或者空，使其等于1
    $('.input-number').blur(function (){
        this.value=this.value.replace(/[^\d]/g,'');
        if(this.value==0){
            this.value=1;
            var value=this.value;
            var period=$(this).attr('period');
            var price=$('.sale-price').attr('price');
            price=price*value;
            $('.divide-pales[period]').attr('period',period);
            periodshow(period,price);
            var price=$('.sale-price').attr('price');
            paymoney(price);
        };

    });
    var price=$('.sale-price').attr('price');
    paymoney(price);

    $('.activityone').click(function (){
        var cid=$(this).attr('cid');
        saleshow(cid);
        /*salehide(cid);*/
    });
    $('.activity-details').click(function (){
        var cid=$(this).attr('cid');
        salehide(cid);
    })

    $('.smallimglist').mouseenter(function (){
        var bigimgsrc=$(this).attr('bigimgsrc');
        $('.imgshow').attr('src',bigimgsrc);
        $('.bigImg').attr('src',bigimgsrc);
    });
    $('.imgshow').load(
        function (){
            $('.smallimglist').each(function (){
                var bigimgsrc=$(this).attr('bigimgsrc');
                img=new Image();
                img.src=bigimgsrc;
                img.onload=function (){
                    console.log(bigimgsrc);
                    $('.img4load').append($(img));
                };
            });
        }
    );
}
//数量增加
function numberadd(){
    var  value=$('.input-number').val();
    value++;
    value=Number(value);
    var restore=$('.restore').html();

    if(value>restore){
        value=restore;
        this.value=restore;
    }

    var price=$('.sale-price').attr('price');
    price=price*value;
    paymoney(price);
    $('.input-number').val(value);
}
//数量减少
function numberminus(){
    var value=$('.input-number').val();
    if(value>1){
        value--;
    }
    if(value==0){
        value=1;
    }
    var price=$('.sale-price').attr('price');
    price=price*value;
    paymoney(price);
    $('.input-number').val(value);
    /*$('.input-number').attr('value',value);*/
}
function periodshow(period,price){
    var mouthpale=price/period;
    if(period>=6){
        mouthpale=price/period*1.045;
    }
    mouthpale=Math.floor(mouthpale*100)/100;
    $('.divide-pale[period='+period+']').html(mouthpale);
    $('.divide-pales[period='+period+']').html(mouthpale);
}
function paymoney(price){
    var period1=$('.divide-list[period=3]').attr('period');
    var period2=$('.divide-list[period=6]').attr('period');
    var period3=$('.divide-list[period=12]').attr('period');
    var period4=$('.divide-list[period=24]').attr('period');
    periodshow(period1,price);
    periodshow(period2,price);
    periodshow(period3,price);
    periodshow(period4,price);
}

function saleshow(cid){
    $('.activity-details[cid='+cid+']').show();
    $('.activityone[cid='+cid+']').hide();
}
function salehide(cid){
    $('.activityone[cid='+cid+']').show();
    $('.activity-details[cid='+cid+']').hide();
}
function showShopping(cid){
    $('.shopping-lists[cid='+cid+']').addClass('shopping-listshow');
    $('.shopping-lists[cid='+cid+'] a').addClass('shopping-listashow');
    $('.list-detailss[cid='+cid+']').show();
}
function hideshopping(cid){
    $('.shopping-lists[cid='+cid+']').removeClass('shopping-listshow');
    $('.shopping-lists[cid='+cid+'] a').removeClass('shopping-listashow');
    $('.list-detailss[cid='+cid+']').hide();
}