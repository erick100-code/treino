function marcados() {
    const maiusculas = document.querySelector('#maiusculas').checked
    const minusculas = document.querySelector('#minusculas').checked
    const numeros = document.querySelector('#numeros').checked
    const especial = document.querySelector('#especial').checked
    
    let array = []

    if (maiusculas) {
        array.push('ABCDEFGHIJKLMNOPQRSTUVWXYZ')
    }

    if (minusculas) {
        array.push('abcdefghijklmnopqrstuvwxyz')
    }

    if (numeros) {
        array.push('123456789')
    }

    if (especial) {
        array.push(';:.>,<\'/\\"!@#$%¨&*(-)_{[}]=+´`~^')
    }

    return array
}

function quant() {
    const quant = document.querySelector('#quantC').value
    
    return quant
}

function aleatorio(array) {// pega um caracter aleatório do array dentro casa aleatória
    const aleatorio = Math.floor(Math.random() * array.length)
    
    return array[aleatorio][Math.floor(Math.random() * array[aleatorio].length)]
}

function geraAle(valIn, vet) {
    let senhaF = ''

    while (senhaF.length < valIn) {
        senhaF += aleatorio(vet)
    }

    return senhaF
}

document.querySelector('#btn').addEventListener('click', () => {
    const valorinp = quant()
    const vet = marcados()
    const span = document.querySelector('#txts')
    const caixaSpan = document.querySelector('#senhacx')

    if(!valorinp || valorinp < 5 || valorinp > 100 || isNaN(valorinp)) {
        window.alert("digite um numero entre 5 e 100")
        return
    }

    if (!vet.length) {
        window.alert("digite uma das opções de formato abaixo")
        return
    }
    
    const senhaFinal = geraAle(valorinp, vet)
    span.textContent = senhaFinal
    caixaSpan.style.display = 'flex'

})

const copy = document.querySelector('#copyicon')

copy.addEventListener('click', () => {
    navigator.clipboard.writeText(document.querySelector('#txts').textContent)
    copy.classList.add('animate-ping')
    copy.style.pointerEvents = 'none'
    setTimeout(() => {
        copy.classList.remove('animate-ping')
        copy.style.pointerEvents = 'auto'
    }, 1000);
})