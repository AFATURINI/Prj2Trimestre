const $img = document.querySelector("img");
const $input = document.querySelector("input");
const $score = document.querySelector(".score");

let score = 0;

let bandeiras = ["BandeiraDoBrasil", "BandeiraDaInglaterra", "BandeiraDaFranca", "BandeiraDaAlemanha", "BandeiraDaRussia",
                "BandeiraDaBelgica", "BandeiraDoCamaroes", "BandeiraDoMexico", "BandeiraDoEstadosUnidos", "BandeiraDaAfricaDoSul",
                "BandeiraDaAlbania", "BandeiraDaAngola", "BandeiraDaArgentina", "BandeiraDoAfeganistao", "BandeiraDaNoruega"]
let numero = Math.floor(Math.random() * bandeiras.length);
let numeroAnterior = numero;

$img.src = `./imagens/Bandeiras/${bandeiras[numero]}.png`;

function verificar(){
    var inputCorrigido = $input.value.replace("õ", "o").replace("é", "e").replace("ç", "c").replace("ú", "u").toLowerCase();

    function verificaEspaco(string) {
        if(string.indexOf(' ') >= 0){
            return true;
        }else{
            return false;
        }
    }

    if(verificaEspaco(inputCorrigido)){
        function convertedor(str) {
            var arrayPais = str.split(' ');
            const nomesMinusculos = arrayPais.map((nome) => nome.toLowerCase());
            const primeiroNomePadronizado = nomesMinusculos.map((nome) => {
                const primeiraLetra = nome[0].toUpperCase();
                return nome.replace(nome[0], primeiraLetra);
            });
            return primeiroNomePadronizado.join("");
        }
        var inputCorrigido = convertedor(inputCorrigido);
    }else{
        var inputCorrigido = inputCorrigido[0].toUpperCase() + inputCorrigido.substring(1);
    }

    if(inputCorrigido == bandeiras[numero].replace("BandeiraDo", "").replace("BandeiraDa", "")){
        score++;
        $score.innerHTML = `Score: ${score}`;
        const acertou = new Audio('./audios/Acertou.mpeg');
        acertou.play();
        acertou.playbackRate = 1;
    }else{
        const music = new Audio('./audios/Errou.mpeg');
        music.play();
        music.playbackRate = 2;
    }

    while(numero == numeroAnterior){
        numero = Math.floor(Math.random() * bandeiras.length);
        if(numero != numeroAnterior){
            $img.src = `./imagens/Bandeiras/${bandeiras[numero]}.png`;
            numeroAnterior = numero;
            break;
        }
    }

    $input.value = "";
        $input.focus();

}



document.addEventListener("keypress", function(event){
    if(event.key == "Enter"){
        verificar()
    }
})




/* Sugestões:
-Concertar o erro de botar espaço sem necessidade("O Strip"). Ex: .....Belgica
*/