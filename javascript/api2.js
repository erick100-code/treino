// ASYNC antes da função a transforma em assincrona 
async function coletaD() {// fetch retorna uma promise
    const returne = await fetch('https://dummyjson.com/test')// await pausa a execução até que a promise seja resolvida
    console.log(returne)// variavel returne recebe a promesa resolvida (response[API] or reject)
}

coletaD()