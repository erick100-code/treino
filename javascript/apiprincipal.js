const URL = 'https://dummyjson.com/test'


// ASYNC colocamos antes de uma função para indicar que ela é assincrona
async function dadosAPI() {// LINHA 6: 
    const res = await fetch(URL)// FETCH RETORNA UMA PROMISE
    console.log(res)// AWAIT PAUSA A EXECUÇÃO ATÉ QUE A PROMISE SEJA RESOLVIDA
}// VARIAVEL RES RECEBE A PROMESA RESOLVIDA (response ou reject)

dadosAPI()
