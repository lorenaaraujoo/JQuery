$(function(){
   /* 
   <!--Quando o scroll da página está ativo, acontece este evento no console dizendo que está ativo-->
   //Evento de quando o scroll ocorre
   $(window).scroll(function(){
        console.log('Scroll ativo!')
    })
    */
   /*
   <!--Quando este evento acontecer, não acontece nada (previna o comportamento padrão) -->
   $(window).scroll(function(e){
       e.preventeDefault();
   })
   */

   /*Quando clicar no link não acontece nada
   $('a').click(function(e){
    //e.preventeDefault(); mesma coisa que 
    return false;
    */

    /*
    <!--Evento de quando redimensionamos a tela-->
    $(window).resize(function(){
        console.log('Minha tela está sendo redimensionada')
    })
    */
    /* 
    var timer;
    $(window).resize(function(){
        clearTimeout(timer);
        timer = setTimeout(function(){
            location.href = "http://etec199-2021-lorena.atwebpages.com";
        },1000)
        })  
        */
       
        $('.box').click(function(){
            e.stopPropagation();
        })
        $('body').click(function(){
            $('box').css('background-color', 'green');
        })
});