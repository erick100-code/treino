function fazerRequisicao(url, callback) {
    //requisição assincrona demora um tempo para ser executada

    setTimeout(() => {// isso é um callback assincrono porque executa o callback após a operação assincrona
        let final = `êxito url da operação ${url}`
        callback(final)
    }, 1);
}

function mostraf(resultado) {
    console.log(resultado)
}


console.log('mostrar1')
fazerRequisicao('https://github.com/erickSM23', mostraf)
console.log('mostrar2')