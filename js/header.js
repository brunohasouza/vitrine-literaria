window.onload = function() {
    const header = document.querySelector('header')
    const logado = window.localStorage.getItem('vitrine')

    if (logado === 'logado') {
        header.classList.add('logado')
    } else {
        // header.classList.add('logado')
        header.classList.remove('logado')
    }
}


const submitForm = (form) => {
    const inputList = Array.from(form.querySelectorAll('.form-control'))
    const inputValues = inputList.filter(input => input.value)

    const alert = document.querySelector(`#${form.id} + .alert-danger`)

    if (inputValues.length === inputList.length) {
        alert.classList.remove('show')
        return true
    } else {
        alert.classList.add('show')
        return false
    }
}


document.querySelector('#loginForm').addEventListener('submit', function(ev){
    ev.preventDefault()

    if(submitForm(this)) {
        window.localStorage.setItem('vitrine', 'logado')
        window.location.reload()
    }
})

document.querySelector('#cadastroForm').addEventListener('submit', function(ev){
    ev.preventDefault()
    submitForm(this)
})

document.querySelector('#recuperarSenhaForm').addEventListener('submit', function(ev){
    ev.preventDefault()
    submitForm(this)
})

document.querySelector('#pesquisarForm').addEventListener('submit', function(ev){
    ev.preventDefault()

    const keyword = this.querySelector('#pesquisarInputKeyword').value

    if (keyword) {
        window.location.href = 'pesquisa.html'
    }
})

document.querySelector('#botaoLogout').addEventListener('click', (ev) =>{
    ev.preventDefault();

    window.localStorage.removeItem('vitrine')
    window.location.reload()
})