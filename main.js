
function tocaSom (idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador];
    console.log(tecla);
    const instrumento = tecla.classList[1];
    
    const idAudio = `#som_${instrumento}`;

    tecla.onclick = function(){
        tocaSom(idAudio);
    }

    // quando a tecla for pressionada
    tecla.onkeydown = function(){
        tecla.classList.add('ativa');
    }
    tecla.onkeyup = function(){
        tecla.classList.remove('ativa')
    }
}
