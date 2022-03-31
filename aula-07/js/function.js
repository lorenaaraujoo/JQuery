$(function(){
    //Função append() para adicionar conteúdo/elementos no final do elemento que selecionarmos.
    //$('.box div').eq(0).append('<h3>Meu elemento adicionado dinamicamente</h3>');

   //var el = $('<h3>Meu conteúdo</h3').appendTo($('.box')).css('color', 'red');
    // Outra forma de manipular o css ---- el.css('color', 'red');

    //$('.box').prepend('<h3>Olá mundo!</h3');
    //var el = $('<h3>Meu conteúdo</h3').prependTo($('.box')).css('color', 'red');

    //var t = '<p>Meu conteúdo após a div box</p>';
    //$('.box').after(t);
    //$('.box').before(t);

    //$(t).insertAfter($('.box')).css('color', 'red');
    //$(t).insertBefore($('.box')).css('color', 'red');

    $('.box').eq(1).remove();
});