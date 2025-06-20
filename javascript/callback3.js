function pegarDados(funcao) {
    let dados = {nome: 'erick'}

    funcao(dados.nome)
}

pegarDados(function mostradados(dados) {
    console.log(`nome ${dados}`)
})