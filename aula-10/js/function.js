$(function(){
    /*
    //Sumir elemento
    $('.box1').fadeOut(2000,function(){
        //Aparecer elemento
        $('.box2').fadeIn(1000,function(){
            console.log('Terminamos nossa animação!')
        });
    });
    */
   $('.box').click(function(){
       $('.box').slideToggle(4000,function(){
           location.href="http://www.google.com";
       });
   })
});