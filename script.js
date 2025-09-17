
let p = document.querySelector("p")
let cronometro
let number = 0

function Start() {
    //criar a variante "cron" vazia, pois precisamos dar uma variante ao setInterval para poder identifica-la depois//
    cronometro = setInterval(function() {
        //"number++ quer dizer que está somando de um em um"//
        number++
        p.innerHTML = number

    }, 100); //1000 mimilisegundos é equivalente a 1 segundo//
}

function Stop() {
    //a variavel surtil efeito agora para poder parar o intervalo//
    clearInterval(cronometro)
}