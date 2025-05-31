const inputM = document.getElementById('M')
const inputF = document.getElementById('F')
const continuar = document.getElementById('continuar')

continuar.addEventListener('click', () => {
    if (inputM.checked || inputF.checked) {

    } else {
        window.alert("você não marcou nenhum marque seu sexo")
    }
})