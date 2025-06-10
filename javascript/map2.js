const vetor = ['erick', 'daniel', 'guilherme']

let novoVET = vetor.map(indice => {
    if (indice === 'erick') return 'eduardo'
    if (indice === 'daniel') return 'borges'
    if (indice === 'guilherme') return 'fergos'
})

console.log(novoVET)