function topshow() {
    $('.tb,.tbb').mouseover(function () {
        $('.tb').addClass('shopping-listshow');
        $('.tbb').addClass('tb2');
    });
    $('.tb,.tbb').mouseleave(function () {
        $('.tb').removeClass('shopping-listshow');
        $('.tbb').removeClass('tb2');
    });
    $('.collection,.collect').mouseover(function () {
        $('.collection').addClass('shopping-listshow');
        $('.collect').addClass('tb2');
    });
    $('.collection,.collect').mouseleave(function () {
        $('.collection').removeClass('shopping-listshow');
        $('.collect').removeClass('tb2');
    });
    $('.phone-edition,.phone,.phone-button').mouseover(function () {

        $('.phone').addClass('tb2');
    });
    $('.phone-edition,.phone,.phone-button').mouseleave(function () {

        $('.phone').removeClass('tb2');
    });
    $('.sz,.contact').mouseover(function () {
        $('.sz').addClass('shopping-listshow');
        $('.contact').addClass('tb2');
    });
    $('.sz,.contact').mouseleave(function () {
        $('.sz').removeClass('shopping-listshow');
        $('.contact').removeClass('tb2');
    });
    window.addEventListener('load', function () {
        var imgDisplay = document.querySelector('.imgdisplay');
        var magnifier = document.querySelector('.magnifier');
        var magnifierContent = document.querySelector('.magnifierContent');
        imgDisplay.addEventListener('mouseover', function () {
            magnifier.style.display = 'block';
            magnifierContent.style.display = 'block';
        });
        imgDisplay.addEventListener('mouseout', function () {
            magnifier.style.display = 'none';
            magnifierContent.style.display = 'none';
        })

        imgDisplay.addEventListener('mousemove', function (e) {
            magnifier.style.display = 'block';
            magnifierContent.style.display = 'block';
            /*console.log(this.offsetLeft);
            console.log(this.offsetTop);*/
            var x = e.pageX - this.offsetLeft - this.offsetParent.offsetLeft;
            var y = e.pageY - this.offsetTop - this.offsetParent.offsetTop;
            var magnifierX = x - magnifier.offsetWidth / 2;


            var magnifierY = y - magnifier.offsetHeight / 2;
            var maxMove = imgDisplay.offsetWidth - magnifier.offsetWidth;
            if (magnifierX <= 0) {
                magnifierX = 0;
            } else if (magnifierX >= maxMove) {
                magnifierX = imgDisplay.offsetWidth - magnifier.offsetWidth;

            }
            if (magnifierY <= 0) {
                magnifierY = 0;
            } else if (magnifierY >= maxMove) {
                magnifierY = imgDisplay.offsetHeight - magnifier.offsetHeight;
            }
            magnifier.style.left = magnifierX + 'px';
            magnifier.style.top = magnifierY + 'px';

            var bigImg = document.querySelector('.bigImg');
            var bigMax = bigImg.offsetWidth - magnifierContent.offsetWidth;
            console.log(maxMove);
            var bigX = magnifierX * bigMax / (maxMove-30);
            var bigY = magnifierY * bigMax / (maxMove-30);
            bigImg.style.left = -bigX + 'px';
            bigImg.style.top = -bigY + 'px';
        });
    })

};

