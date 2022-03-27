const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const passwordConfirm = document.getElementById('password-confirmation')


form.addEventListener('submit', (e) => {
     e.preventDefault()
    
    checkInputs()
    
    }) 
    

const checkInputs = () =>{

    const usernameValue = username.value
    const emailValue = email.value
    const passwordValue = password.value
    const passwordConfirmValue = passwordConfirm.value
    

    if (usernameValue === ""){
        setErrorFor(username, 'o número de usuário é obrigatório')
    }else{
        setSuccessFor(username)
    }


    if(emailValue === ''){
        setErrorFor(email, 'email é obrigatório')
    }else{
        setSuccessFor(email)
    }


    if(passwordValue === ''){
        setErrorFor(password, 'a senha é obrigatória')
    }else if(passwordValue.length < 7){
        setErrorFor(password, 'no mínimo 7 caracteres')
    }else{
        setSuccessFor(password)
    }


    
    if(passwordConfirmValue === ""){
        setErrorFor(passwordConfirm, 'confirme sua senha')

    }else if(passwordConfirmValue != passwordValue){
        setErrorFor(passwordConfirm, 'as senhas não são iguais')
    }else{
        setSuccessFor(passwordConfirm)
    }


    const allFormControls = form.querySelectorAll('.form-control')


    const formIsValid = [...allFormControls].every
   

    ((allFormControls) =>{
        return (allFormControls.className === 'form-control success')
    })

    if(formIsValid){
        console.log('o formulário está 100% completo')
    }else{
        console.log('formulário incompleto')
    }
}

const setErrorFor = (input, message) => {

    const formControl = input.parentElement

    const small = formControl.querySelector('small')
    
    small.innerText = message

    formControl.className = 'form-control erro'

}

const setSuccessFor = (input) =>{

    const formControl = input.parentElement

    formControl.className = 'form-control success'
}