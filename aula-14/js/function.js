$(function(){
    $.ajax({
        'url':'conteudo.html',
        //'method':'post',
        //data:('nome':'Lorena','idade':'16')


    }).done(function(data){
        $('container').append(data);
    });
})