function limitprice(){
    $('input.sortBarPrice').keyup(function (){
        var num=$(this).val();
        if(num.length==0){
            $('.productUnit').show();
            return;
        }
        num=parseInt(num);
        if(isNaN(num)){
            num=1;
        }
        if(num<=0){
            num=1;
        }
        $(this).val(num);

        var begin=$('input.price-min').val();
        var end=$('input.price-max').val();
        if(!isNaN(begin)&&!isNaN(end)){
            $('.productUnit').hide();
            $('.productUnit').each(function (){
                var price=$(this).attr('price');
                price=new Number(price);
                if(price<=end&&price>=begin){
                    $(this).show();
                }
            });
        }
    });
}