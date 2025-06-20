function fazerRequisicao(url, callback) {
  // Simula uma requisição assíncrona
  
  setTimeout(() => {// callback assincrono
    const resultado = `Dados da URL: ${url}`;
    callback(resultado)
  }, 2000); // Aguarda 2 segundos
}

function imprimirResultado(resultado) {
  console.log(resultado);
}

fazerRequisicao("https://example.com/api/dados", imprimirResultado);
// A saída será impressa após 2 segundos