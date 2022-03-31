$(function(){
    /*
    var el = $('.box');
    var meutexto = 'Olá mundo!'

    el.html("<div class=\"teste\">"+meutexto+"</div>");
    el.html('<div class="teste1">Meu elemento!</div>');
    
    $('.box2').text("<div></div>");
    $('.box2').text($('.box2').text() + "Olá mundo!");

    $('input[type=text]').val("Olá mundo!");

    $('textarea').text("Olá mundo!");
'*/

    $('input[type=button]').click(function(){
        var str = $('input[type=text]').val();
        /*Split separa nossa string com base no delimitador.
        var var2 = v.split("@");
        console.log(var2);
        */
    
        //Substr recorta nossa string
        //console.log(str.substr(0,4));

        /*
        var splitstr = str.split("@");
        if(splitstr[1] == 'hotmail.com'){
            $('input[type=text]').css('opacity', '0');        
        }else{
            console.log('A condição não bateu!')
        }
        */

    console.log(str.trim());        
    });
});