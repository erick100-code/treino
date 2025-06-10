// const vet = ['maria', 'joao', 'mateus']// vetor original

// let novo = vet.map(vet => {// map cria um novo vetor baseado no vetor vet.map let novo recebe esse novo vetor
//     if (vet === 'maria') return 'antonieta'// se o indice atual do vetor for true retorna um novo nome 
//     if (vet === 'joao') return 'carlos'// se o indice atual do vetor for igual ao nome retorna sobrenome
//     if (vet === 'mateus') return 'abreu'//se o indice que esta sendo ouvido
// })

// console.log(vet)// mostra o vetor antigo no console
// console.log(novo)// mostra o novo vetor com os novos nomes no console

// RESUMINDO            MAP() == cria um novo vetor baseado em um determinado vetor

// DIFERENÇAS ENTRE MAP E FOREACH

// MAP: cria um novo vetor e permiti retornar valores para cada indice desse vetor

// FOREACH: não permite usar o return e não cria um novo vetor

// CODE COM forEach

let vetor = ['zézinho', 'larissa', 'erick' ,'henrique', 'juliano']// defini o vetor
let vat = []//  vetor a ser adicionado os nomes

vetor.forEach(indice => {// percorre todos os indices do vetor e adiciona a cada um deles o seguinte bloco
    if (indice === 'zézinho') {// se a condição for verdadeira o novo vetor vat recebe um novo nome
        vat.push('david')// push == adiciona no final do vetor vat um valor
    } else if (indice === 'larissa') {
        vat.push('manuela')
    } else if (indice === 'erick') {
        vat.push('erick')
    } else {// se o indice do vetor não for igual a nenhum desses nomes, ele não faz a conversão para o sobrenome e adiciona no final do vetor vat o valor do indice 
        vat.push(indice)
    }
})

console.log(vat)