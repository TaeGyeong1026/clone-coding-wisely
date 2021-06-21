//common script file

$(document).ready(function () {

    size_INIT();
    
    $('.basket-button').click(function () {
        $('.cart-modal').fadeIn(500);
        $('.cart-modal').addClass('active');
        $('.cart').addClass('active');
    });
    $('.m-cart-button').click(function(){
        $('.cart-modal').fadeIn(500);
        $('.cart-modal').addClass('active');
        $('.cart').addClass('active');
    });
    $('.cart-modal').click(function (e) {
        if( !$(e.target).hasClass('close-area')){
            $('.cart-modal').removeClass('active');
            $('.cart').removeClass('active');
            $('.cart-modal').fadeOut(500);
        }
    }); 
    
    $('.m-menu-button').click(function () {
        $('.m-menu-modal').fadeIn(500);
        $('.m-menu-modal').addClass('clicked');
        $('.m-menu').addClass('clicked');
    });
    $('.m-menu-modal').click(function (e) {
        if( !$(e.target).hasClass('close-area')){
            $('.m-menu-modal').removeClass('clicked');
            $('.m-menu').removeClass('clicked');
            $('.m-menu-modal').fadeOut(500);
        }
    });

    $('.product-open').click(function(){
       $(this).toggleClass('clicked');
    });
    
    function size_INIT(){
        ww = $(window).width();
        
        if (ww >= 1140) {
            $('.header-menu-li').css({
                paddingLeft: 20,
                paddingRight: 20,
            });
            $('.info-item').css({
                paddingLeft: 20,
                paddingRight: 20,
            });
            $('.footer-top-left-li').css({
                marginRight: 40,
            });
            $('.footer-top-right-li').css({
               marginRight: 40, 
            });

        } else if (ww >= 768 && ww < 1140) {
            $('.header-menu-li').css({
                paddingLeft: 10,
                paddingRight: 10,
            });
            $('.info-item').css({
                paddingLeft: 10,
                paddingRight: 10,
            });
            $('.footer-top-left-li').css({
                marginRight: 15,
            });
            $('.footer-top-right-li').css({
               marginRight: 15, 
            });
        }
        else if( ww < 768){
            $('.info-item').css({
                paddingLeft: 10,
                paddingRight: 10,
            });
            $('.footer-top-right-li').css({
               marginRight: 0, 
            });            
        }
    }
    $(window).resize(function () {
        size_INIT();
    });

    $(window).scroll(function () {
        var sct = $(window).scrollTop();
        $('body').mousewheel(function (event, delta) {
            if (delta > 0) {
                if (sct >= 88) {
                    $('header').css({
                        position: 'fixed',
                        top: 0,
                    }).addClass('color');
                } else if (sct < 88) {
                    $('header').css({
                        position: 'relative',
                        top: 0,
                    }).removeClass('color');
                }
            } else if (delta < 0) {
                $('header').css({
                    position: 'fixed',
                    top: -88,
                });
            }
        });
    });
    
    $('.m-footer-drop-title').click(function(){
        $('.m-footer-drop-arrow').toggleClass('clicked');
        $('.m-footer-drop-info').toggleClass('clicked');
    });
}) //end
