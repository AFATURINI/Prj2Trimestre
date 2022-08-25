const $ghost = document.querySelector(".ghost");
const $pacMan = document.querySelector(".pac-man");
const $placar = document.querySelector(".placar");

let contador = 0

const jump = () =>{
    $pacMan.classList.add("jump");

    setTimeout(() => {

        $pacMan.classList.remove("jump");

    },500);
}


const loop = setInterval(() =>{

    const $ghostPosition = $ghost.offsetLeft;
    const $pacManPosition = +window.getComputedStyle($pacMan).bottom.replace("px", "");

    if(contador > 500){
        $ghost.src = "./imagens/fantasmaBlue.gif"
    }
    if(contador > 1000){
        $ghost.src = "./imagens/fantasmaPink.gif"
    }

    if($ghostPosition <= 135 && $ghostPosition > 0 && $pacManPosition <= 80){

        $ghost.style.animation = "none";
        $ghost.style.left = `${$ghostPosition}px`;

        $pacMan.style.animation = "none";
        $pacMan.style.bottom = `${$pacManPosition}px`;

        $pacMan.src = "./imagens/pac-man-morte.png";

        clearInterval(loop);
        clearInterval(loop2);

    }
})


const loop2 = setInterval(() => {
    contador = contador + 10;
    $placar.innerHTML = `Score:${contador}`;
}, 1000)

const loop3 = setInterval(() => {
    const Duracao = +window.getComputedStyle($ghost).animationDuration.replace("s", "");
    $ghost.style.animationDuration = `${Duracao - 0.001}s`;
}, 1000)

document.addEventListener("keydown", jump);