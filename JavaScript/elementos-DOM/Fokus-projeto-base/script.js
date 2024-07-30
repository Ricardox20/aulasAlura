const html = document.querySelector('html')
const focoBt = document.querySelector('.app__card-button--foco')
const curtoBt = document.querySelector('.app__card-button--curto')
const longoBt = document.querySelector('.app__card-button--longo')
const temporizador = document.querySelector('.app__card-timer')
const comecar = document.querySelector('.app__card-primary-button-wrapper')
const titulo = document.querySelector('.app__title')
const tituloNegrito = document.querySelector('.app__title-strong')
const imagemTexto = document.querySelector('.app__image')
const segundosFoco = 1500 //60 * 25
const segundosCurto = 300 //60 * 5
const segundosLongo = 900 //60 * 15
var intervalo
var tempoSegundo = 1500
temporizador.innerHTML = '25:00'

focoBt.addEventListener('click', () =>{
    clearInterval(intervalo)
    temporizador.innerHTML = '25:00'
    html.setAttribute('data-contexto', 'foco')
    tituloNegrito.innerHTML = 'mergulhe no que importa.'
    titulo.innerHTML = 'Otimize sua produtividade, ' + tituloNegrito.outerHTML
    imagemTexto.src='/JavaScript/elementos-DOM/Fokus-projeto-base/imagens/foco.png'
    tempoSegundo = segundosFoco
})

curtoBt.addEventListener('click', () =>{
    clearInterval(intervalo)
    temporizador.innerHTML = '05:00'
    html.setAttribute('data-contexto', 'descanso-curto')
    tituloNegrito.innerHTML = 'Faça uma pausa curta!'
    titulo.innerHTML = 'Que tal dar uma respirada? ' + tituloNegrito.outerHTML
    imagemTexto.src='/JavaScript/elementos-DOM/Fokus-projeto-base/imagens/descanso-curto.png'
    tempoSegundo = segundosCurto
})

longoBt.addEventListener('click', () =>{
    clearInterval(intervalo)
    temporizador.innerHTML = '15:00'
    html.setAttribute('data-contexto', 'descanso-longo')
    tituloNegrito.innerHTML = 'Faça uma pausa longa!'
    titulo.innerHTML = 'Hora de voltar à superfície. ' + tituloNegrito.outerHTML
    imagemTexto.src='/JavaScript/elementos-DOM/Fokus-projeto-base/imagens/descanso-longo.png'
    tempoSegundo = segundosLongo
})

comecar.addEventListener('click', () =>{
    if (intervalo){
        clearInterval(intervalo)
        intervalo = null
    }
    let tempo = tempoSegundo
    let doisPontos = ':'
    intervalo = setInterval(() => {
        if(tempo > 0){
            tempo--
            let minutos = Math.floor(tempo/60)%60 > 9 ? Math.floor(tempo/60)%60 : '0'+Math.floor(tempo/60)%60
            let segundos = Math.floor(tempo)%60 > 9 ? Math.floor(tempo)%60 : '0'+Math.floor(tempo)%60
            temporizador.innerHTML = minutos+doisPontos+segundos
        } else {
            temporizador.innerHTML = '00'+doisPontos+'00'
        }
    }, 1000);
})