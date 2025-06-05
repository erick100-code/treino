function marcados() {
//               FAZ AS VARIAVEIS RECEBEREM (TRUE OU FALSE) SE OS INPUTS ESTIVEREM MARCADOS

    const maiuscula = document.querySelector('#maiuscula').checked 
    const minuscula = document.querySelector('#minuscula').checked
    const numero = document.querySelector('#numero').checked
    const especial = document.querySelector('#especial').checked


    const charTypes = []

    if (maiuscula){// verfica se esta marcado ou seja true
        charTypes.push('ABCDEFGHIJKLMNOPQRSTUVWXYZ')
    }

    if (minuscula){// verfica se esta marcado ou seja true
        charTypes.push('abcdefghijklmnopqrstuvwxyz')
    }

    if (numero){// verfica se esta marcado ou seja true
        charTypes.push('123456789')
    }

    if (especial){// verfica se esta marcado ou seja true
        charTypes.push('~^{=+-_´`;:><.,/?*&¨%$#@"|\\!\'')
    }

    return charTypes
}
function quantCaracter() {
    const size = document.querySelector('#quant').value 
    return size
}

function geraAleatorio(charTypes) {// pega o array
    const randomIndex = Math.floor(Math.random() * charTypes.length)// gera um numero aleatorio das casas do array

    return charTypes[randomIndex][Math.floor(Math.random() * charTypes[randomIndex].length)]// pega o array na casa aleatoria, depois pega um valor aleatorio do numero de caracteres dentro dessa casa
}

function gerarSenha(size, charTypes) {
    let passwordGenerate = ''

    while (passwordGenerate.length < size) {
        passwordGenerate += geraAleatorio(charTypes)
    }

    return passwordGenerate
}

function message(text, bg) {
    Toastify({
        text: text,
        style: {
            background: bg,
            boxShadow: '#dc2626'
        }
    }).showToast()
}

document.querySelector('#btn').addEventListener('click', () => {
    const size = quantCaracter()
    const array = marcados()
    const local = document.querySelector('#span')
    const senhaCaixa = document.querySelector('#senhacaixa')
    
    
    if (!size || size < 5 || size > 100 || isNaN(size)) {// se size é falso (vazio) null ou undefined 
        message("digite um numero entre 5 e 100", '#cd2626')
        return
    }
    
    if (!array.length) {// (!) verifica se é vazio falso..etc
        message('marque uma das opções para gerar senha', '#82B748')
        return
    }

    const gerarsenha = gerarSenha(size, array)
    
    local.textContent = gerarsenha
    senhaCaixa.style.display = 'flex'
})

const copy = document.querySelector('#copy-icon')

copy.addEventListener('click', (event) => {
    navigator.clipboard.writeText(document.querySelector('#span').textContent)
    copy.classList.add('animate-ping')
    copy.style.pointerEvents = 'none'
    setTimeout(() => {
        copy.classList.remove('animate-ping')
        copy.style.pointerEvents = 'auto'
    }, 800);
    
    message('senha copiada', 'gold')
})