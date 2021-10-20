$(function(){
    var imgNum = 0;

    setInterval(function(){
    imgNum++;   
    if(imgNum > 4) imgNum = 0; 
     var x = -(imgNum * 100) + '%';

     $('.slider .sliders')
     .css('margin-left', x)

     $('.slider .indicator a')
        .removeClass('active');
     $('.slider .indicator a')
        .eq(imgNum)
        .addClass('active');

    
     

     },5000)
    
})