//判断选项有没有选中，如果都没选中，则selectAny为false，则结算框不改变；如果有一个选中了，selectAny为true，结算框变化
function syncCreateOrderButton(){
    var selectAny=false;
    $('.selected-one').each(function (){
        if("selectit"==$(this).attr('selectit')){
            selectAny=true;
        }
    });
    if(selectAny){
        $('.sum-price').css("background-color","#C40000");
        $('.sum-price').removeAttr("disabled");
    }else {
        $('.sum-price').css("background-color","#AAAAAA");
        $('.sum-price').attr("disabled","disabled");
    }
}
//判断每一个单独的选项有没有选中，如果都选中，selectAll值为true，如果有一个没选中，selectAll的值为false，如果为true，全选框打钩，反之为空
function syncSelect(){
    var selectAll=true;
    $('.selected-one').each(function (){
        if("false"==$(this).attr('selectit')){
            selectAll=false;
        }
    });
    if(selectAll){
        $(".selected[pid=1]").attr("src","../img/site/cartSelected.png");
    }else {
        $(".selected[pid=1]").attr("src","../img/site/cartNotSelected.png");
    }
}
//判断有多少个商品属于被选中状态，如果选中selectit='selectit'，遍历选中的商品，根据商品的价格依次叠加，商品数量依次叠加，最后将总价以及数量写到对应位置
function calcSumPriceAndNumber(){
    var sum=0;
    var totalnumber=0;
    $(".selected-one[selectit='selectit']").each(function (){
        var oiid=$(this).attr('oiid');
        var price=$('.shopping-price[oiid='+oiid+']').html();
        sum+=new Number(price);
        var num=$('.shopping-cart-number[oiid='+oiid+']').val();
        totalnumber+=new Number(num);
    });
    $(".shopping-pay").html(sum);
    /*$("span.cartTitlePrice").html(sum);*/
    $(".shopping-number").html(totalnumber);
}
//将单独的商品进行计算
function syncPrice(pid,num,price){
    $(".shopping-cart-number[pid="+pid+"]").val(num);
    var shoppingprice = num*price;
    $(".shopping-price[pid="+pid+"]").html(shoppingprice);
    calcSumPriceAndNumber();
}
function cart(){
    //每个单独的商品点击之后，没选中的变为选中，选中的变为没选中，选中为selectit=‘selsctit’，未选中为selectit=‘false’
    $(".selected-one").click(function(){
        var selectit = $(this).attr("selectit")
        if("selectit"==selectit){
            $(this).attr("src","../img/site/cartNotSelected.png");
            $(this).attr("selectit","false")
            $(this).parents(".shopping-cart-list").css("background-color","#fff");
        }
        else{
            $(this).attr("src","../img/site/cartSelected.png");
            $(this).attr("selectit","selectit")
            $(this).parents(".shopping-cart-list").css("background-color","#FFF8E1");
        }
        syncSelect();
        syncCreateOrderButton();
        calcSumPriceAndNumber();
    });
    //点击全选框，如果未选中则更改为选中，并将单独的选项进行选中，如果已经选中，将单独的商品改为未选中
    $(".selected").click(function(){
        var selectit = $(this).attr("selectit")
        if("selectit"==selectit){
            $(".selected").attr("src","../img/site/cartNotSelected.png");
            $(".selected").attr("selectit","false")
            $(".selected-one").each(function(){
                $(this).attr("src","../img/site/cartNotSelected.png");
                $(this).attr("selectit","false");
                $(this).parents(".shopping-cart-list").css("background-color","#fff");
            });
        }
        else{
            $(".selected").attr("src","../img/site/cartSelected.png");
            $(".selected").attr("selectit","selectit")
            $(".selected-one").each(function(){
                $(this).attr("src","../img/site/cartSelected.png");
                $(this).attr("selectit","selectit");
                $(this).parents(".shopping-cart-list").css("background-color","#FFF8E1");
            });
        }
        syncCreateOrderButton();
        calcSumPriceAndNumber();
    });
    //对单独的商品数量进行控制，使其合法化
    $(".shopping-cart-number").keyup(function(){
        var pid=$(this).attr("pid");
        var stock= $(".order-Item-stock[pid="+pid+"]").text();
        var price= $(".order-Item-price[pid="+pid+"]").text();
        var num= $(".shopping-cart-number[pid="+pid+"]").val();
        this.value=this.value.replace(/[^\d]/g,'');
        num = parseInt(num);
        if(isNaN(num))
            num= 1;
        if(num<=0)
            num = 1;
        if(num>stock)
            num = stock;
        syncPrice(pid,num,price);
    });
    //增加按钮
    $(".shopping-cart-add").click(function(){
        var pid=$(this).attr("pid");
        var stock= $(".order-Item-stock[pid="+pid+"]").text();
        var price= $(".order-Item-price[pid="+pid+"]").text();
        var num= $(".shopping-cart-number[pid="+pid+"]").val();
        num++;
        if(num>stock)
            num = stock;
        syncPrice(pid,num,price);
    });
    //减少按钮
    $(".shopping-cart-minus").click(function(){
        var pid=$(this).attr("pid");
        var stock= $(".order-Item-stock[pid="+pid+"]").text();
        var price= $(".order-Item-price[pid="+pid+"]").text();
        var num= $(".shopping-cart-number[pid="+pid+"]").val();
        --num;
        if(num<=0)
            num=1;
        syncPrice(pid,num,price);
    });
    //失去焦点，判断输入的值合不合法，不合法进行合法化
    $('.shopping-cart-number').blur(function (){
        this.value=this.value.replace(/[^\d]/g,'');
        var value=this.value;
        if(this.value==0){
            this.value=1;
            value=this.value;
        };

    });
}