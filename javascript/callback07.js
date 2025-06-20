function request(url, callback) {// callback é uma função que passamos como parametro para outra função
    setTimeout(() => {// operação assincrona
        let resf = `url pronta: (${url})`//javascript funciona assim, a gente registra que quer esperar alguma coisa acontecer(assincrona) e executa o resto de forma sincrona == imediata em tempo real
        callback(resf)// callback assincrono pois executa o code do callback após a operação assincrona
    }, 1);
}

function back(param) {
    console.log(param)
    console.log('oi')
}

request('https://urldosite.com', back)




// fução de ordem superior é uma função que aceita como parametro outra função

// callbacks Assincronos e Sincronos: callback sincronos (executa o codigo do callback que é uma função, assim que o pai função de ordem superior é executado/chamado]) callback assincrono executa o code do callback após a operação assincrona