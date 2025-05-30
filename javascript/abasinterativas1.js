const botões = document.querySelectorAll('button.btn')

botões.forEach(botão => botão.addEventListener("click", () => visibilit(botão)))

function visibilit(bot) {
    botões.forEach(bots => bots.style.backgroundColor = 'transparent')
    bot.style.backgroundColor = '#C6D2FB'
    const conteudos = document.querySelectorAll('div.conteudo')

    conteudos.forEach(conteudo => conteudo.classList.remove('active'));

    const atribute = bot.getAttribute('btn-id')
    const conteudoO = document.getElementById(atribute)

    conteudoO.classList.add('active')
}