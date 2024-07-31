const html = document.querySelector('html')
const focoBt = document.querySelector('.app__card-button--foco')
const curtoBt = document.querySelector('.app__card-button--curto')
const longoBt = document.querySelector('.app__card-button--longo')
const botoes = document.querySelectorAll('.app__card-button')
const titulo = document.querySelector('.app__title')
const tituloNegrito = document.querySelector('.app__title-strong')
const imagemTexto = document.querySelector('.app__image')
const musicaToggle = document.querySelector('#alternar-musica')
const musica = new Audio('/JavaScript/elementos-DOM/Fokus-projeto-base/sons/luna-rise-part-one.mp3')
musica.loop = true
const comecarBt = document.querySelector('.app__card-primary-button-wrapper')
const comecarPararBt = document.querySelector('#start-pause span')
const play = new Audio('/JavaScript/elementos-DOM/Fokus-projeto-base/sons/play.wav')
const pause = new Audio('/JavaScript/elementos-DOM/Fokus-projeto-base/sons/pause.mp3')
const alerta = new Audio('/JavaScript/elementos-DOM/Fokus-projeto-base/sons/beep.mp3')
const iconComecarParar = document.querySelector('.app__card-primary-butto-icon')
const temporizador = document.querySelector('.app__card-timer')

let tempoCorrido = 1500
let intervaloId = null

function alterarVisual(visual){
    html.setAttribute('data-contexto', visual)
    imagemTexto.src=`/JavaScript/elementos-DOM/Fokus-projeto-base/imagens/${visual}.png`
    botoes.forEach(function(visual){visual.classList.remove('active')})
}

function alterarTexto(texto1, texto2){
    tituloNegrito.innerHTML = texto2
    titulo.innerHTML = texto1 + tituloNegrito.outerHTML
}

focoBt.addEventListener('click', () =>{
    alterarVisual('foco')
    alterarTexto('Otimize sua produtividade, ','mergulhe no que importa.')
    focoBt.classList.add('active')
    tempoCorrido = 1500
    mostrarTempo()
})

curtoBt.addEventListener('click', () =>{
    alterarVisual('descanso-curto')
    alterarTexto('Que tal dar uma respirada? ', 'Faça uma pausa curta!')
    curtoBt.classList.add('active')
    tempoCorrido = 300
    mostrarTempo()
})

longoBt.addEventListener('click', () =>{
    alterarVisual('descanso-longo')
    alterarTexto('Hora de voltar à superfície. ', 'Faça uma pausa longa!')
    longoBt.classList.add('active')
    tempoCorrido = 900
    mostrarTempo()
})

musicaToggle.addEventListener('click', ()=>{
    musica.paused? musica.play() : musica.pause()
})

const contagemRegressiva = () => {
    if(tempoCorrido <= 0){
        alerta.play()
        alert('Tempo encerrado!')
        zerar()
        return
    }
    tempoCorrido --
    mostrarTempo()
}

comecarBt.addEventListener('click', startStop)

function startStop(){
    if(intervaloId){
        pause.play()
        zerar()
        comecarPararBt.textContent = "Começar"
        iconComecarParar.src = `/JavaScript/elementos-DOM/Fokus-projeto-base/imagens/play_arrow.png`
        return
    } else {
        play.play()
        comecarPararBt.textContent = "Parar"
        iconComecarParar.src = `/JavaScript/elementos-DOM/Fokus-projeto-base/imagens/pause.png`
    }
    intervaloId = setInterval(contagemRegressiva, 1000)
}

function zerar(){
    clearInterval(intervaloId)
    intervaloId = null
}

function mostrarTempo(){
    const tempo = new Date(tempoCorrido * 1000)
    const tempoFormatado = tempo.toLocaleTimeString('pt-BR', {minute: '2-digit', second: '2-digit'})
    temporizador.innerHTML = `${tempoFormatado}`
}

mostrarTempo()