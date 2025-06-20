//fazer o callback da url
let c1 = 0
console.log('primeira chamada')

setTimeout(() => {
    while (c1 < 400){ 
        console.log(`loop infinity ${c1}`)
    }   
}, 5000);


for (let c = 0; c < 1500; c += 1) {
    console.log(c)
}