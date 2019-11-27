$(document).ready(function () {
  
    $('p:last').insertBefore($('p:first'))

    $('.slider').css({marginLeft:'-100%'});

    $('#despues').click(function () { 
        $('.slider').animate({marginLeft:'-200%'},1000,function () {
            $('p:first').insertAfter($('p:last'))
            $('.slider').css({marginLeft:'-100%'})    
        });
           
    });

    $('#antes').click(function () {
        $('.slider').animate({marginLeft:'0%'},1000,function () {
            $('p:last').insertBefore($('p:first'))
            $('.slider').css({marginLeft:'-100%'})

        });        


        // $('p:last').insertBefore($('p:first'))
        // $('.slider').css({marginLeft:'-100%'})         
    });


























});