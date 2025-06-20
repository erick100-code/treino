const URL = 'https://dummyjson.com/test'// aqui é a URL DA (API)

//consumindo api com fetch (consumir é o mesmo que pegar dados de uma API)

async function chamaAPI() {// FUNCIONAMENTO DO FETCH
    const response = await fetch(URL)// FETCH É UMA FUNÇÃO ASSINCRONA QUE FAZ UM REQUISIÇÃO HTTPS E RETORNA UMA PROMESS QUE É UM OBJETO QUE REPRESENTA O RESULTADO DE UMA OPERAÇÃO ASSINCRONA. QUANDO A REQUISIÇÃO É CONCLUIDA A PROMESS É RESOLVIDA EM UM OBJETO RESPONSE. O RESPONSE CONTEM AS INFORMAÇÕES DA REQUISIÇÃO COMO CABEÇALHO, STATUS E BODY(CORPO DA REQUISIÇÃO QUE É A API)

    if (response.status = 200){
        console.log(response)
    }

}

chamaAPI()