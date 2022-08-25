const $pipe = document.querySelector(".pipe");
const $mario = document.querySelector(".mario");
const $placar = document.querySelector(".placar");

let contador = 0

const jump = () =>{
    $mario.classList.add("jump");

    setTimeout(() => {

        $mario.classList.remove("jump");

    },500);
}


const loop = setInterval(() =>{

    const $pipePosition = $pipe.offsetLeft;
    const $marioPosition = +window.getComputedStyle($mario).bottom.replace("px", "");

    if($pipePosition <= 135 && $pipePosition > 0 && $marioPosition <= 80){

        $pipe.style.animation = "none";
        $pipe.style.left = `${$pipePosition}px`;

        $mario.style.animation = "none";
        $mario.style.bottom = `${$marioPosition}px`;

        $mario.src = "./imagens/game-over.png";
        $mario.style.width = "75px";
        $mario.style.marginLeft = "50px";



        clearInterval(loop);
        clearInterval(loop2);

    }
}, 10)


const loop2 = setInterval(() => {
    contador = contador + 10;
    $placar.innerHTML = `Score:${contador}`;
}, 1000)

document.addEventListener("keydown", jump);