const TodosOsLinks = document.querySelectorAll('a');
TodosOsLinks.forEach(function (links) {
    links.onclick = function () {
        const curso = 'Este Curso ou Esta Funcionalidade Não Estão Disponiveis';
        window.alert(curso);
    }
});

function liberarAudio() {
    const botao = document.querySelector('#btn-musica');
    const audio = document.querySelector('#meu-audio');

    botao.style.display = 'none';

    audio.style.display = 'flex';


    audio.play();


    audio.addEventListener('play', function () {
        console.log('Playing Song: ' + !false);
    });

    audio.addEventListener('pause', function () {
        console.log('Playing Song: ' + !true);
    });
};