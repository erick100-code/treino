const ph = document.getElementById('ph')
const ps = document.getElementById('ps')
const pc = document.getElementById('pc')
const pl = document.getElementById('pl')
const pb = document.getElementById('pb')
const image = document.getElementById('imagep')

ph.addEventListener("click", () =>{
    ph.style.backgroundColor = '#C6D2FB'
    
    ps.style.backgroundColor = 'transparent'
    pc.style.backgroundColor = 'transparent'
    pl.style.backgroundColor = 'transparent'
    pb.style.backgroundColor = 'transparent'

    image.setAttribute('src','images/home.svg')
    image.style.height = '100%'
    
})

ps.addEventListener("click", () =>{
    ps.style.backgroundColor = '#C6D2FB'
    
    ph.style.backgroundColor = 'transparent'
    pc.style.backgroundColor = 'transparent'
    pl.style.backgroundColor = 'transparent'
    pb.style.backgroundColor = 'transparent'

    image.src = 'images/services.svg'
    image.style.height = '100%'
})

pc.addEventListener("click", () =>{
    pc.style.backgroundColor = '#C6D2FB'
    
    ph.style.backgroundColor = 'transparent'
    ps.style.backgroundColor = 'transparent'
    pl.style.backgroundColor = 'transparent'
    pb.style.backgroundColor = 'transparent'

    image.src = 'images/contact.svg'
    image.style.height = '100%'
})

pl.addEventListener("click", () =>{
    pl.style.backgroundColor = '#C6D2FB'
    
    ph.style.backgroundColor = 'transparent'
    pc.style.backgroundColor = 'transparent'
    ps.style.backgroundColor = 'transparent'
    pb.style.backgroundColor = 'transparent'

    image.src = 'images/location.svg'
    image.style.height = '100%'
})

pb.addEventListener("click", () =>{
    pb.style.backgroundColor = '#C6D2FB'
    
    ph.style.backgroundColor = 'transparent'
    pc.style.backgroundColor = 'transparent'
    pl.style.backgroundColor = 'transparent'
    ps.style.backgroundColor = 'transparent'

    image.src = 'images/about.svg'
    image.style.height = '100%'
})