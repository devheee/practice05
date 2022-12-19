
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


$('.play').click(function () {
    $('.mainSlide').slick('slickPlay');
});

$('.stop').click(function () {
    $('.mainSlide').slick('slickPause');
});

$('.businessSlide').slick({
    arrows: true,
    dots: false,
    autoplay: false,
    autoplaySpeed: 4000,
    pauseOnHover: false,
    pauseOnFocus: false,
});

$('.right_slide').slick({
    arrows: true,
    dots: false,
    autoplay: false,
    autoplaySpeed: 4000,
    pauseOnHover: false,
    pauseOnFocus: false,
});
