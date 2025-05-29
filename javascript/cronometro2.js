const inici = document.getElementById('play')
const action = inici.getAttribute('action')
const localmarc = document.getElementById('marc')
const titulo = document.getElementById('tempo')
const botMarc = document.getElementById('marcar')
const botreset = document.getElementById('reset')

let timer = 0
let intervalId = 0
let marcs = []

const formatTime = (time) => { // FORMATA O TEMPO
    const horas = Math.floor(time / 360000)
    const minutos = Math.floor((time % 360000) / 6000)
    const segundos = Math.floor((time % 6000) / 100)
    const microS = time % 100

    return `${horas.toString().padStart(2, '0')}: ${minutos.toString().padStart(2, '0')}: ${segundos.toString().padStart(2, '0')}: ${microS.toString().padStart(2, '0')}`
}// RETORNA O FORMATO FORMATADO

const marcar = (casaN, tempoT) => {
    localmarc.innerHTML += `<p>marcação ${casaN}: ${formatTime(tempoT)}<p/>`
}

const agoraMarc = () => {
    if (timer > 0) {
        marcs.push(timer)
        marcar(marcs.length, timer)
    }
}

const iniciaTimer = () => {
    const bot = document.getElementById('play')
    const act = bot.getAttribute('action')

    clearInterval(intervalId)

    if (act == 'start' || act == 'continue') {
        intervalId = setInterval( () => {
            timer += 1
            mostraTimer(timer)
        }, 10)

        bot.innerHTML = '<i class="fa-solid fa-pause"></i>'
        bot.setAttribute('action', 'pause')
    } else if (act == 'pause') {
        bot.setAttribute('action', 'continue')
        bot.innerHTML = '<i class="fa-solid fa-play"></i>'
    }
}

const mostraTimer = (time) => {
    titulo.innerHTML = `${formatTime(time)}`
}

const reset = () => {
    clearInterval(intervalId)
    timer = 0
    mostraTimer(timer)
    inici.innerHTML = `<i class="fa-solid fa-play"></i>`
    inici.setAttribute('action', 'start')
    localmarc.innerHTML = ''
    marcs = []
}

inici.addEventListener("click", iniciaTimer)
botMarc.addEventListener("click", agoraMarc)
botreset.addEventListener("click", reset)