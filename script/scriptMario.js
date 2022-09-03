const $pipe = document.querySelector(".pipe");
const $mario = document.querySelector(".mario");
const $placar = document.querySelector(".placar");
const $clouds = document.querySelector(".clouds");
const $gameOver = document.querySelector(".mensagem");

let contador = 0

const jump = () =>{
    $mario.classList.add("jump");

    setTimeout(() => {

        $mario.classList.remove("jump");

    },500);
}

const musica = new Audio("./audios/MusicaDoMario.mpeg");
musica.play();
musica.playbackRate = 1;

const loop = setInterval(() =>{

    const $pipePosition = $pipe.offsetLeft;
    const $marioPosition = +window.getComputedStyle($mario).bottom.replace("px", "");
    const $cloudsPosition = $clouds.offsetLeft;

    if($pipePosition <= 135 && $pipePosition > 0 && $marioPosition <= 80){

        $pipe.style.animation = "none";
        $pipe.style.left = `${$pipePosition}px`;

        $mario.style.animation = "none";
        $mario.style.bottom = `${$marioPosition}px`;

        $mario.src = "./imagens/game-over.png";
        $mario.style.width = "75px";
        $mario.style.marginLeft = "50px";

        $clouds.style.animation = "none";
        $clouds.style.left = `${$cloudsPosition}px`

        musica.pause();

        const musicaMorte = new Audio("./audios/SomDeMorte.mpeg");
        musicaMorte.play();
        musicaMorte.playbackRate = 1;

        $gameOver.style.visibility = "visible";

        clearInterval(loop);
        clearInterval(loop2);

    }
}, 10)


const loop2 = setInterval(() => {
    contador = contador + 10;
    $placar.innerHTML = `Score:${contador}`;
}, 1000)

document.addEventListener("keydown", jump);