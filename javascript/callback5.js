function coleta(funt) {
    let dados =  40
    
    funt(dados)
}

coleta(function dadosf(dadosfinal) {
    console.log(`os dados finais são: ${dadosfinal}`)
})