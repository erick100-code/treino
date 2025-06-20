//fazer o callback de coleta de dados

// function coleta(callback) {// CALLBACK é uma função que passamos como parametro para outra função
//     let perfil = {nome: 'erick', idade: 17, sexo: 'M', salario: 8000 + '$'}
//     let salario = perfil.salario * 5

//     callback(perfil, salario)
// }

// coleta( (perfil, renda) => { 
//     console.log(`parabens ${perfil}, seu salario no brasil recebendo em dolar é de ${renda} reais`)
// })

// REQUISÃO DE URL

// function request(url, funcao) {
//     setTimeout(() => {  
//         let text = `aqui esta o texto com a url ${url}`
//         funcao(text) 
//     }, 4000);
// }

// function call(argum) {
//     console.log(argum)
// }

// request('https://url.com.github.io', call)


// COLETA DE DADOS


function dadoscolet(callback) {// callback SINCRONO e função SINCRONA 
    setTimeout(() => {
        while(true){}
        let dados = {
            textoSecret: 'seus olhos vem a maldade, sua boca fala a verdade, seu coração esta cheio de justiça, e sua espada vai acabar com mal. CODIGO DOS CAVALEIROS SAGRADOS'
        }
    
        callback(dados.textoSecret)
    }, 4000);
}


dadoscolet((argumento) => {
    console.log('primera chamada')
    console.log(argumento)
})

console.log('segunda chamada importante')