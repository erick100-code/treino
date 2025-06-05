function marcados() {
    const maiusculas = document.querySelector('#maiusculas').checked
    const minusculas = document.querySelector('#minusculas').checked
    const numero = document.querySelector('#numero').checked
    const especial = document.querySelector('#especial').checked

    let array = []

    if (maiusculas) {
        array.push("ABCDEFGHIJKLMNOPQRSTUVWXYZ")
    }

    if (minusculas) {
        array.push("abcdefghijklmnopqrstuvwxyz")
    }

    if (numero) {
        array.push('123456789')
    }

    if (especial) {
        array.push(';:.>,</?~^]}[{´`-_)(*&¨%$#@!"|\\\'')
    }
    
    return array
}

function quant() {  
    const size = document.querySelector('#quant').value
    
    return size
}

function geraAleatorio(array) {
    const aleatorio = Math.floor(Math.random() * array.length)// pega um valor aleatório referente ao numero de casas do array
    
    return array[aleatorio][Math.floor(Math.random() * array[aleatorio].length)]// pega um caracter aleatório do array na casa aleatória
}

function gerarSenha(size, array) {
    let senha = ''

    while (senha.length < size) {
        senha += geraAleatorio(array)
    }

    return senha
}

document.querySelector('#bot').addEventListener('click', () => {
    const size = quant()
    const array = marcados()
    const localtext = document.querySelector('#local') 
    const localcx = document.querySelector('#senhacx')

    if (!size || size < 5 || size > 100 || isNaN(size)) {
        window.alert("formato invalido digite um numero entre 5 e 100")
        return
    }
    
    if (!array.length) {
        window.alert("marque os formatos de senha abaixo")
        return
    }

    const senhaFinal = gerarSenha(size, array)
    localcx.style.display = 'flex'
    localtext.textContent = senhaFinal 
})

const icocx = document.querySelector('#cxico')
icocx.style.cursor = 'pointer'

icocx.addEventListener('click', () => {// ao clicar no icon salva
    navigator.clipboard.writeText(document.querySelector('#local').textContent)
    icocx.classList.add('animate-ping')
    icocx.style.pointerEvents = 'none'
    setTimeout(() => {
        icocx.classList.remove('animate-ping')
        icocx.style.pointerEvents = 'auto'
    }, 1000);
})