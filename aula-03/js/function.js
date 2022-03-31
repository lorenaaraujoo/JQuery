$(function(){

function validarCliqueHover(){   
    $('.artigo1').click(function(){
        $('.artigo2').css('background-color', 'purple')
    });

    $('.artigo1').hover(function(){
        $('.artigo2').css('background-color', 'red')
    },function(){
        $('.artigo2').css('background-color', 'rgb(100, 100, 100)')
    });
    /*
    <!--Focus - Executa alguma função quando existe foco no elemento-->
    $('textarea').focus(function(){
        console.log('Estou dentro do textarea')
    });
    <!--Executa uma função quando retiramos o foco-->
    $('textarea').blur(function(){
        console.log('Estou fora do textarea')
    });
    */
}

    function validarFormulario(){
        $('select').change(function(){
            console.log('Meu select foi alterado')
        });
    }
    validarFormulario();
    validarCliqueHover();
});
