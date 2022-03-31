$(function(){
    //Pegamos a largura do elemento
    $('.box').width();

    //Setamos a largura
    $('.box').css('width','900px');

    // Width/heigth = dimensão calculada total com base no padding.
    // innerWidth/innerHeigth = dimensão calculada total INCLUINDO o padding.
    // outerWidth/outerHeigth = dimensão calculada total INCLUINDO p padding e margin (se o parametro for true).

    console.log("Width: "+$('.box').width());
    console.log("Inner Width: "+$('box').innerWidth());
    console.log("Outer Width: "+$('.box').outerWidth(true));

    console.log("Heigth: "+$('.box').heigth());
    console.log("Inner Heigth: "+$('box').innerHeigth());
    console.log("Outer Heigth: "+$('.box').outerHeigth());
});