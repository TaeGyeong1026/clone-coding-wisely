//main page script file

$(document).ready(function(){
       
    size_INIT();
    
    $('.press-icon').click(function(){
        var click_num = $(this).index();
        icon_class_change(click_num);
        press_title_change(click_num);        
    });
    
    function icon_class_change(i) {
        $('.press-icon').removeClass('on');
        $('.press-icon').eq(i).addClass('on');
    }
    function press_title_change(i){
        $('.press-title').removeClass('on');
        $('.press-title').eq(i).addClass('on');
    }
    
    function size_INIT(){
        ww = $(window).width();
        
        if(ww >= 1140){
            $('.premium-box-wrap').css({
               width: 1110, 
            });
            $('.recommend').css({
                marginTop: 80,
            });   
            $('.page-container-6').css({
                width: '1140px',
                textAlign: 'left',
            });  
            $('.page-6-pic').css({
                float: 'left',
            });
            $('.text-wrap-6').css({
                width: 470,
                marginLeft: 110,
                marginTop: 0,
                textAlign: 'left',
            });    
            $('.button-6').css({
                margin: '0',
            });   
        }
        else if( ww >= 768 && ww < 1140){ 
            $('.premium-box-wrap').css({
               width: 540, 
            });
            $('.recommend').css({
                marginTop: 580,
            });
            $('.page-container-6').css({
                width: '100%',
                textAlign: 'center',
            });
            $('.page-6-pic').css({
                float: 'none',
            })
            $('.text-wrap-6').css({
                width: '100%',
                marginLeft: 0,
                marginTop: 50,
                textAlign: 'center',
            });
            $('.button-6').css({
                margin: '50px auto',
            });
        }
        else if( ww < 768){
            $('.premium-box-wrap').css({
               width: 360, 
            });
            $('.recommend').css({
                marginTop: 0,
            });
            $('.page-container-6').css({
                width: '100%',
                textAlign: 'center',
            });
            $('.page-6-pic').css({
                float: 'none',
            })
            $('.text-wrap-6').css({
                width: '100%',
                marginLeft: 0,
                marginTop: 50,
                textAlign: 'center',
            });
            $('.button-6').css({
                margin: '50px auto',
            });
            
        }
    }
    
    $(window).resize(function(){
        size_INIT();
    });
    
});     //end