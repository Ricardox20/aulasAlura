const html = document.querySelector('html')
const focoBt = document.querySelector('.app__card-button--foco')
const curtoBt = document.querySelector('.app__card-button--curto')
const longoBt = document.querySelector('.app__card-button--longo')
const temporizador = document.querySelector('.app__card-timer')
const comecar = document.querySelector('.app__card-primary-button-wrapper')
const segundosFoco = 1500 //60 * 25
const segundosCurto = 300 //60 * 5
const segundosLongo = 900 //60 * 15
var intervalo
var tempoSegundo
temporizador.innerHTML = '25:00'

focoBt.addEventListener('click', () =>{
    clearInterval(intervalo)
    temporizador.innerHTML = '25:00'
    html.setAttribute('data-contexto', 'foco')
    tempoSegundo = segundosFoco
})

curtoBt.addEventListener('click', () =>{
    clearInterval(intervalo)
    temporizador.innerHTML = '05:00'
    html.setAttribute('data-contexto', 'descanso-curto')
    tempoSegundo = segundosCurto
})

longoBt.addEventListener('click', () =>{
    clearInterval(intervalo)
    temporizador.innerHTML = '15:00'
    html.setAttribute('data-contexto', 'descanso-longo')
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