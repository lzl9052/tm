function maoyan(){
$('.list1').mouseover(function (){
    $('.img1').addClass('maoyanshow1');
});
$('.list1').mouseleave(function (){
    $('.img1').removeClass('maoyanshow1');
});
$('.list2').mouseover(function (){
    $('.img2').addClass('maoyanshow2');
});
$('.list2').mouseleave(function (){
    $('.img2').removeClass('maoyanshow2');
});
$('.list3').mouseover(function (){
    $('.img3').addClass('maoyanshow3');
});
$('.list3').mouseleave(function (){
    $('.img3').removeClass('maoyanshow3');
});
$('.list4').mouseover(function (){
    $('.img4').addClass('maoyanshow4');
});
$('.list4').mouseleave(function (){
    $('.img4').removeClass('maoyanshow4');
});
$('.list5').mouseover(function (){
    $('.img5').addClass('maoyanshow5');
});
$('.list5').mouseleave(function (){
    $('.img5').removeClass('maoyanshow5');
});
$('.list6').mouseover(function (){
    $('.img6').addClass('maoyanshow6');
});
$('.list6').mouseleave(function (){
    $('.img6').removeClass('maoyanshow6');
});
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