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

function geraAleatorio(charTypes) {
    const randomIndex =  charTypes.length
}

document.querySelector('#btn').addEventListener('click', () => {
    window.alert(marcados())
})
