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
    // 页面加载完成后，自动发起请求，获取用户姓名
    $.get('/my/userinfo',function (res) {
        // status 为 0 表示获取用户名称成功；否则表示获取用户名称失败！
        if (res.status === 0) {
            $('.login-btn,.register-btn').hide().siblings('.username,.logout').show()
            $('.username').html(res.data.username)
        }
    })
    $('.username').on('click',function (){
        location.href='tm-user.html'
    })
    // 点击按钮退出登录
    $('.logout').on('click', function () {
        localStorage.removeItem('token')
        // 2. 重新跳转到登录页面
        location.href = 'tm-login.html'
    })
});