const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
 
const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500);
}

const loop = setInterval(() => {
    
console.log('loop')


    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px','');

    console.log(marioPosition);
    
    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = './imagens/perdeu.png';
        mario.style.width = '50%'
        mario.style.marginLeft = '65px'

        clearInterval(loop);
    }

}, 10); 

document.addEventListener('keydown', jump);



//Função contador de pontons em andamento em andamento!!!

// let pontos = 0; // Inicializa a pontuação
// let interval = null; // Usado para controlar a atualização de pontos

// function startGame() {
//     interval = setInterval(atualizaPontos, 100); // A cada 100 milissegundos
//   }
  
//   function atualizaPontos() {
//     pontos++;
//     document.getElementById("pontuacao").innerText = pontos;
//   }

//   function atualizaPontos() {
//     let personagemPos = personagem.offsetLeft; // Pega a posição do personagem no eixo X
//     pontos = Math.floor(personagemPos / 10); // Atualiza os pontos com base na distância percorrida
//     document.getElementById("pontuacao").innerText = pontos;
//   }
  