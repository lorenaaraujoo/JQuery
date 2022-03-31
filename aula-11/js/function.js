$(function(){

    /*
    var timer;
    var timeOut = function(){
        $('.box1').animate({
            'width':'40px',
            'height':'500px',
            'marginLeft':'100px',
            'paddingTop':'200px'
        },2000)
    }

    $('body').click(function(){
        alert('Animação com timeout foi cancelado!');
        clearTimeout(timer);
    })

    $('.box1').animate({
        'width':'40px',
        'height':'500px',
        'marginLeft':'100px',
        'paddingTop':'200px'
    },2000,function(){
        setTimeout(timeOut,3000);
    });
    */

    var timer;

    $('.body').click(function(){
        console.log('Intervalo cancelado!');
        clearInterval(timer);
    })

    timer = setInterval(function(){
        //alert('Olá mundo');
    },3000);

});