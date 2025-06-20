function request(url, callback) {// callback assincrono pois executa o codigo do callback após a operação assincrona abaixo
   // operação assincrona 
    setTimeout(() => {
        let resfinal = `aqui esta a sua url ${url} prontinho`
        callback(resfinal)// aqui além de passar como argumento nós executamos a função
    }, 6000);
}

function callback(resposta) {   
    console.log(resposta)
}

console.log('oi')

request('https://recebasuaurl.com', callback)

console.log('oi')