//fazer o callback da url
let c1 = 0
console.log('primeira chamada')

setTimeout(() => {//executa a assincrona
    while (c1 <= 400){ 
        console.log(`loop infinity ${c1}`)
        c1 += 1
    }   
}, 1000);

// os js só executa uma coisa por vez ou seja na pratica é assim

for (let c = 0; c <= 34500; c += 1) {// conta ate o valor e depois 
    console.log(c)
}

setTimeout(() => {
    
    while(true){
        console.log('segunda chamada')
    }
}, 500);

console.log('1/2 chamada')
