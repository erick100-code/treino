const inputM = document.getElementById('M')
const inputF = document.getElementById('F')
const continuar = document.getElementById('continuar')
const formulario = document.getElementById('form')
const senha1 = document.getElementById('senha1')
const senha2 = document.getElementById('senha2')

continuar.addEventListener('click', (event) => {// ao cliar dispara evento
    
    if (formulario.checkValidity()) {// verifica se tudo do formulario esta ok
        
        if (senha1.value === senha2.value) {// verifica se as senhas são identicas
    
        } else {
            event.preventDefault()// bloqueia o envio de formulario que é o comportamente padão ao clicar em um butão submit dentro de um form
            window.alert("senhas erradas")
        }

        if (inputM.checked || inputF.checked) {// verifica qualquer um dos inputs radios estão marcados
           
        } else {
            event.preventDefault()
            window.alert("você não marcou nenhum marque seu sexo")
        }

    } else {
        window.alert("[ERROR] prencha tudo")
          //arrumar o envio de formulario no mobile first. como? utilizand media query no JS
    }
})