function settle(){
    $('.bottom-ly').click(function (){
        $('.bottom-ly').hide();
        $('.leaveMessage').show();
    });
    $('.bottom-input').keyup(function (){
        var value=$(this).val();
        var number=value.length;
        if(number>200){
            number=200;
            this.value=this.value.slice(0,200);
            /*$('.bottom-input').attr('disabled','disabled');*/
        }
        $('.leaveMessageMount').html(200-number);

    });
    $('.bottom-input').blur(function (){
        var value=$(this).val();
        var number=value.length;
        if(number>200){
            number=200;
            this.value=this.value.slice(0,200);
        }
    })
}
