$(function(){
    $('.form_contato').submit(function(){
        //var input = $('.form_contato input[type=text]')
        var container = $('.container')
        var content = 'Nome: '+ $('input[name=nome]').val() +
        '<hr>E-mail '+ $('input[name=email]').val() +
        '<hr>Telefone '+ $('input[name=telefone]').val();

        container.html(input.val(content));
        return false;
    })
});