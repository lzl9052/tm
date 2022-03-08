$(function (){
    $('.setting').on({
        mouseover:function (){
            $('.user-info,.jt').show();

        },
        mouseleave:function (){
            $('.user-info,.jt').hide();
        }
    })
    $('.user-info,.jt').on({
        mouseover:function (){
            $('.user-info,.jt').show();
        },
        mouseleave:function (){
            $('.user-info,.jt').hide();
        }
    })
    $('.user-info-update').on('click',function (){
        $('.user-main').show().siblings().hide();
    })
    $('.user-pwd-update').on('click',function (){
        $('.update-pwd').show().siblings().hide();
    })
    $('.user-name').on('click',function (){
        $('.userInfo').show().siblings().hide();
    })

    // 页面加载完成后，自动发起请求，获取用户姓名
    $.get('/my/userinfo',function (res) {
        // status 为 0 表示获取用户名称成功；否则表示获取用户名称失败！
        if (res.status === 0) {
            $('.user-name').html(res.data.username);
            $('.user-nickname').html(res.data.nickname);
            $('.user-email').html(res.data.email);
        }else {
            alert('请您先登录账号！')
            location.href='tm-login.html'
        }
    })
    $('.user-main').submit(function (e){
        e.preventDefault();
        $.post('/my/userinfo',$(this).serialize(),function (res) {
            // status 为 0 表示获取用户名称成功；否则表示获取用户名称失败！
            if (res.status === 0) {
                alert('恭喜您更新信息成功!')
                location.href = 'tm-user.html'
            }else {
                alert('更新信息失败！请重试！');
            }
        })
    })
    $('.update-pwd').submit(function (e){
        e.preventDefault();
        $.post('/my/updatepwd',$(this).serialize(),function (res) {
            // status 为 0 表示获取用户名称成功；否则表示获取用户名称失败！
            if (res.status === 0) {
                alert('恭喜您更换密码成功!请重新登录！')
                location.href = 'tm-login.html'
            }else {
                alert('更换密码失败！请重试！');
            }
        })
    })
})