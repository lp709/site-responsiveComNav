document.addEventListener('DOMContentLoaded', function() {
const TodosOsLinks = document.querySelectorAll('a');
TodosOsLinks.forEach(function (links) {
    links.onclick = function () {
        const curso = 'Este Curso ou Esta Funcionalidade Não Estão Disponiveis No Momento, Obrigado!';
        window.alert(curso);
    }
});
    const botao = document.querySelector('#btn-musica');
    const audio = document.querySelector('#meu-audio');

    botao.addEventListener('click', function() {
        botao.classList.add('escondido');
        audio.style.display = 'block';
        audio.play();
    });

    audio.addEventListener('ended', function() {
        botao.classList.remove('escondido');
        audio.style.display = 'none';
    });
});