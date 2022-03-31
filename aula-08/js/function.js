$(function(){
    /*
    $('a').click(function(){
        alert('Olá mundo!')
    })
    $('body').on('click','a',function(){
        alert('Olá mundo!')
        return false;
    })
    setTimout(function(){
        $('body').html('<a href="">Meu link!</a>');
    },3000)
    */

    var func = function(){
        //$(this).css('background','green');
        //console.log($(this).index()); --- saber a ordem dos elementos (0,1,2,3...)
        $('input[type=text]').eq($(this).index()).css('backgtound','green');
    }
    //$('input[type=text]').keyup(func);
    $('input[type=text]').keydown(func);
});