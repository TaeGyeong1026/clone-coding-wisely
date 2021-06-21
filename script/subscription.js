//subscription page script file

$(document).ready(function () {
    var wh = $(window).height();
    size_INIT();

    $(window).scroll(function () {
        sct = $(window).scrollTop();

        bubbleErase();
        storyImagePositionSet();
        designPositionSet();
        performancePositionSet();
        habitScrollEvent();
    });

    function size_INIT() {
        ww = $(window).width();

        if (ww >= 1140) {
            $('.page-4-container').css({
                'flex-direction': 'row',
            });
            $('.razor-bubble-wrap').css({
                marginRight: '15%',
            });
            $('.text-wrap-4').css({
                textAlign: 'left',
            });
            $('.page-7').css({
                height: 2750,
            });
            $('.page-7-box-wrap').css({
                width: 730,
            });
            $('.page-7-pic-wrap').eq(1).css({
                marginTop: 500,
                marginLeft: 50,
            });
            $('.page-7-pic-wrap').eq(3).css({
                marginTop: 500,
                marginLeft: 50,
            });
            $('.text-wrap-7').css({
                marginLeft: '2.60416%',
            });
            $('.page-7-box-wrap').css({
                right: 0,
            });
        } else if (ww >= 768 && ww < 1140) {
            $('.icon-image-box-wrap').css({
                width: '100%',
            });
            $('.page-4-container').css({
                'flex-direction': 'column',
            });
            $('.razor-bubble-wrap').css({
                marginRight: 0,
            });
            $('.text-wrap-4').css({
                textAlign: 'center',
            });
            $('.page-7').css({
                height: 3000,
            });
            $('.page-7-box-wrap').css({
                width: 340,
            });
            $('.page-7-pic-wrap').css({
                margin: 0,
            });
            $('.text-wrap-7').css({
                marginLeft: '10.416666%',
            });
            $('.page-7-box-wrap').css({
                right: '10%',
            });
        } else if (ww < 768) {
            $('.page-4-container').css({
                'flex-direction': 'column',
            });
            $('.razor-bubble-wrap').css({
                marginRight: 0,
            });
            $('.text-wrap-4').css({
                textAlign: 'center',
            });
            $('.page-7').css({
                height: 'auto',
            });
            $('.page-7-box-wrap').css({
                width: 360,
                margin: '100px auto',
            });
            $('.page-7-pic-wrap').css({
                margin: 0,
            });
            $('.text-wrap-7').css({
                marginLeft: '0',
            });
            $('.page-7-box-wrap').css({
                right: '0%',
            });
        }
    }

    $(window).resize(function () {
        size_INIT();
        razorChange(colorIndex);
    });

    function bubbleErase() {
        var bubbleTop = $('.page-4').prev().offset().top - 200;
        var bubbleBottom = $('.page-4').offset().top + 200;
        var articleHeight = 1060;
        var result = (bubbleBottom - sct) / articleHeight * 100;

        if (sct >= bubbleTop && sct < bubbleBottom) {
            $('.bubble-box').css({
                height: '' + result + '%',
            });
            $('#bubble-process').css({
                top: '' + (100 - result) + '%',
            })
        }
    }

    function storyImagePositionSet() {
        var storyTop = $('.page-5').offset().top;
        var storyBottom = $('.page-5').next().offset().top;
        var storyTextTop = [0,
                             $('.text-wrap-5').eq(0).offset().top,
                             $('.text-wrap-5').eq(1).offset().top,
                             $('.text-wrap-5').eq(2).offset().top]

        if (sct < storyTop - 88) {
            $('.page-5-pic-sticky').removeClass('active');
        } else if (sct >= storyTop - 88) {
            $('.page-5-pic-sticky').addClass('active');

            for (i = 0; i < 4; i++) {
                if (sct >= storyTextTop[i] - 50 && sct < storyTextTop[i + 1] - 50) {
                    $('.page-5-pic').removeClass('active');
                    $('.page-5-pic').eq(i).addClass('active');
                    $('.text-wrap-5').removeClass('active');
                    $('.text-wrap-5').eq(i).addClass('active');
                    $('.circle-tag').removeClass('active');
                    $('.circle-tag').eq(i).addClass('active');
                }
            }
        }
        $('.fill-top').css({
            height: '' + 100 - (storyTextTop[2] - (sct + 500)) / (storyTextTop[2] - storyTextTop[1]) * 100 + '%',
        });
        $('.fill-bottom').css({
            height: '' + 100 - (storyTextTop[3] - (sct + 500)) / (storyTextTop[3] - storyTextTop[2]) * 100 + '%',
        });

    }

    function designPositionSet() {
        var designTop = $('.page-6-position').offset().top - 200;
        var designBottom = $('.page-6').next().offset().top;
        designHeight = 660;

        for (i = 0; i < 4; i++) {
            if (sct >= designTop + (designHeight * i) && sct < designTop + (designHeight * (i + 1))) {
                $('.text-wrap-6-bottom').removeClass('active');
                $('.text-wrap-6-bottom').eq(i).addClass('active');
                //                $('.page-6-circle').removeClass('active');
                //                $('.page-6-circle').eq(i).addClass('active');
                $('.page-6-pic').removeClass('active');
                $('.page-6-pic').eq(i).addClass('active');
            }
        }
    }

    function performancePositionSet() {
        var performanceTop = $('.page-7').offset().top;
        var peformanceBottom = $('.page-7').next().offset().top;
        var perf_TextTop = [0,
                                $('.page-7-pic-wrap').eq(0).offset().top,
                                $('.page-7-pic-wrap').eq(1).offset().top,
                                $('.page-7-pic-wrap').eq(2).offset().top,
                                $('.page-7-pic-wrap').eq(3).offset().top,
                           ]

        for (i = 0; i < 4; i++) {
            if (sct >= perf_TextTop[i] && sct < perf_TextTop[i + 1]) {
                $('.page-7-pic-wrap').removeClass('active');
                $('.page-7-pic-wrap').eq(i).addClass('active');
            }
        }
    }

    colorIndex = 0;
    $('.color-pick-circle').click(function () {
        colorIndex = $(this).index();
        razorChange(colorIndex);
    });
    $('.prev').click(function () {
        colorIndex--;
        if (colorIndex < 0) {
            colorIndex = 2;
        }
        razorChange(colorIndex);
    });
    $('.next').click(function () {
        colorIndex++;
        if (colorIndex > 2) {
            colorIndex = 0;
        }
        razorChange(colorIndex);
    });

    function razorChange(i) {

        var ww = $(window).width();
        var bgURL = ['url(image/subscription/razor-bg/razor-navy-background.png)',
                        'url(image/subscription/razor-bg/razor-blue-background.png)',
                        'url(image/subscription/razor-bg/razor-gray-background.png)']

        var bg = ['#091420', '#005fe0', '#b6bbbc'];

        $('.color-pick-circle').removeClass('pick');
        $('.color-pick-circle').eq(i).addClass('pick');
        $('.page-title-in').removeClass('active');
        $('.page-title-in').eq(i).addClass('active');
        $('.page-8-pic').removeClass('active');
        $('.page-8-pic').eq(i).addClass('active');

        if (ww >= 768) {
            $('.page-8').css({
                backgroundImage: bgURL[i],
            });
        } else if (ww < 768) {
            $('.page-8').css({
                backgroundColor: bg[i],
                backgroundImage: 'none',
            });
        }

    }

    function habitScrollEvent() {
        var habitTop = $('.page-9').offset().top - 50;
        var habitBottom = $('.page-9').next().offset().top;
        var habitItemWidth = [0,
                                  $('.page-9-process-item').eq(0).width(),
                                  $('.page-9-process-item').eq(1).width(),
                                  $('.page-9-process-item').eq(2).width(),
                                ];
        var habitItemLeft = [0,
                                 $('.page-9-process-item').eq(0).position().left,
                                 $('.page-9-process-item').eq(1).position().left,
                                 $('.page-9-process-item').eq(2).position().left,
                                ]

        for (i = 0; i < 4; i++) {
            if (sct >= habitTop + (700 * i) && sct < habitTop + (700 * (i + 1))) {
                $('.text-vertical').css({
                    top: -243 * i,
                });
                $('.text-wrap-9').removeClass('active');
                $('.text-wrap-9').eq(i).addClass('active');
                $('.page-9-pic').removeClass('active');
                $('.page-9-pic').eq(i).addClass('active');
                $('.page-9-process-back').css({
                    width: habitItemWidth[i],
                    left: habitItemLeft[i],
                });

                if (sct >= habitTop && sct < habitTop + 700) {
                    $('.page-9-process-item').removeClass('active');
                } else if (sct >= habitTop + 700) {
                    $('.page-9-process-item').removeClass('active');
                    $('.page-9-process-item').eq(i - 1).addClass('active');
                }
            }
        }
    }

    $('.page-9-process-item').click(function () {
        var habitTop = $('.page-9').offset().top - 50;
        var habitIndex = $(this).index() / 2 + 1;

        $('html, body').stop().animate({
            scrollTop: habitTop + (700 * habitIndex) + 10,
        });
    });


}); //end
