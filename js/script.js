const btnLogin = document.querySelector('.btn-login')
const container = document.querySelector('.container')

btnLogin.addEventListener('click', () => {

    const field = [ ...document.querySelectorAll('input') ]

    field.forEach(field => {
        if (field.value === '')
            container.classList.add('validate-error')
    })

    const formError = document.querySelector('.validate-error')

    if (formError) {
        formError.addEventListener('animationend', (event) => {
            if (event.animationName === 'nono') {
                container.classList.remove('validate-error')
            }
        })
    } else {
        container.classList.add('form-hide')
    }
})

container.addEventListener('animationstart', (event) => {
    if (event.animationName === 'hide')
        document.querySelector('body').style.overflow = 'hidden'
})

container.addEventListener('animationend', (event) => {
    if (event.animationName === 'hide')
        container.style.display = 'none'
        document.querySelector('body').style.overflow = 'none'
})