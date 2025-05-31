const menu = document.getElementById('menu')
const image = document.getElementById('image')

image.addEventListener("click", () => {
    menu.classList.toggle('active')
    
    if(menu.classList.contains('active')) {
        image.style.transition = 'all 1s ease'
        image.style.transform = 'rotate(90deg)'

        setTimeout(() => {
            image.setAttribute('src','images/x-solid.svg')
        },0);
    } else {
        image.style.transform = 'rotate(0deg)'
        image.setAttribute('src','images/bars-solid.svg')
    }
})