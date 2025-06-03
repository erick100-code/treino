const input = document.getElementById('barra')

input.addEventListener('input', (event) => {
    const valorinp = formatar(event.target.value)
    
    const items = document.querySelectorAll('.item')
    const  nenhum = document.getElementById('nen')
    const ul = document.getElementById('caxa')
    let temRes = false

    items.forEach(item => {
        const title = item.querySelector('.title')

        if (formatar(title.textContent).indexOf(valorinp) != -1) {
            item.style.display = 'flex'
            temRes = true
        } else {
            item.style.display = 'none'
        }
    })

    if (temRes) {
        ul.style.height = '400px'
        nenhum.style.display = 'none'
    } else {
        ul.style.height = 'auto'
        nenhum.style.display = 'block'
    }
})

function formatar(value) {
    return value.toLowerCase().trim()
}