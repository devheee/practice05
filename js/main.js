


$('.mainSlide').slick({
    arrows: true,
    dots: true,
    autoplay: false,
    autoplaySpeed: 2000,
    speed: 2000,
    pauseOnHover: false,
    pauseOnFocus: false,

    customPaging: function (slider, i) {
        var thumb = $(slider.$slides[i]).data();
        if (i == '0') {
            i = "01";
        } else if (i == '1') {
            i = "02";
        } else if (i == '2') {
            i = "03";
        } else if (i == '3') {
            i = "04";
        } return '<a class="dot">' + i + '</a>';
    }
});

var barwidth = $('.bar').width();
$('.mainSlide').on('afterChange', function (e, s, c) {
    var bb = barwidth / s.slideCount;
    $('.bar span').css({ width: bb })
    $('.bar span').css({ width: bb * (c + 1) })
});


// $('.play').click(function () {
//     $('.mainSlide').slick('slickPlay');
// });

// $('.stop').click(function () {
//     $('.mainSlide').slick('slickPause');
// });

var bgColor = ['#1b6e6f', '#207844', '#41437b', '#9b3440', '#844141', '#7f7f7f']
$('.mainArt .inner').css({ background: bgColor[0] });

$('.right_slide').on('init afterChange', function (e, s, c) {
    console.log(c);
    $('.mainArt .left_tab .itm').eq(c).addClass('on').siblings().removeClass('on');

    $('.mainArt .inner').css({ background: bgColor[c] })
    $('.num').html('<span>' + (c ? c + 1 : 1) + '</span>/<span class="op">' + bgColor.length + '</span>');
});

$('.right_slide').slick({
    arrows: false,
    dots: false,
    autoplay: false,
    autoplaySpeed: 4000,
    slidesToShow: 2,
    pauseOnHover: false,
    pauseOnFocus: false,
    variableWidth: true,
});

$('.arrows i:nth-child(1)').on('click', function () {
    $('.right_slide').slick('slickPrev')
})

$('.arrows i:nth-child(2)').on('click', function () {
    $('.right_slide').slick('slickNext')
})
