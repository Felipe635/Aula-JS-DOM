var notas = document.querySelector('#primeiro-aluno');

calcmedia();

var notas = document.querySelector('#segundo-aluno');

calcmedia();

var notas = document.querySelector('#terceiro-aluno');

calcmedia();

var notas = document.querySelector('#quarto-aluno');

calcmedia();

var notas = document.querySelector('#quinto-aluno');

calcmedia();


function calcmedia(){

    var ValorNotaHtml = notas.querySelector('.info-notaHtml');
    var notaHtml = parseInt(ValorNotaHtml.textContent);

    var ValorNotaCss = notas.querySelector('.info-notaCss');
    var notaCss = parseInt(ValorNotaCss.textContent);

    var ValorNotaJs = notas.querySelector('.info-notaJs');
    var notaJs = parseInt(ValorNotaJs.textContent);


    var media = (notaHtml + notaCss + notaJs) / 3;

    var valorMedia = notas.querySelector('.info-media');
    valorMedia.textContent = media

    return;
}

