const submitBtn =document.querySelector('.submit')
const spanError = document.querySelector('#name-error')
const emailError = document.querySelector('#email-error')
const passError = document.querySelector('#pass-error')

submitBtn.addEventListener('click',(e)=>{
e.preventDefault()
if(userNameFunction() && emailFunction() && validPassFunction()){
    alert(' alert("Form Submited Successfully")')
}

})




const userNameFunction = ()=> {
    let nameInput = document.querySelector('#name').value

if(nameInput.length==0){
spanError.textContent = 'Name is required'
spanError.previousElementSibling.classList.add('fa-xmark')
return false

}else if(!nameInput.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
spanError.textContent='Write Full Name'
spanError.previousElementSibling.classList.add('fa-xmark')
return false
}
else {
    spanError.textContent = ''
    // alert("Form Submited Successfully")
    spanError.previousElementSibling.classList.add('fa-check')
    return true
}
}

const emailFunction = ()=>{
    let emailInput = document.querySelector('#email').value

    if(emailInput.length==0){
    emailError.textContent = 'Email is required'
    emailError.previousElementSibling.classList.add('fa-xmark')
    return false
    
    }else if(!emailInput.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
    emailError.textContent='Write correct email'
    emailError.previousElementSibling.classList.add('fa-xmark')
    return false
    }
    else {
        emailError.textContent = ''
        // alert("Form Submited Successfully")
        emailError.previousElementSibling.classList.add('fa-check')
        return true
    }
    
}

const validPassFunction = ()=>{
    let passInput = document.querySelector('#password').value

    if(passInput.length==0){
    passError.textContent = 'password is required'
    passError.previousElementSibling.classList.add('fa-xmark')
    return false
    
    }else if(!passInput.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,30}$/)){
    passError.textContent='password should contain 1 Uppercase,1 Lowercase, 1 Digit & 1 Alphabet'
    passError.previousElementSibling.classList.add('fa-xmark')
    return false
    }
    else {
        passError.textContent = ''
        // alert("Form Submited Successfully")
        passError.previousElementSibling.classList.add('fa-check')
        return true
    }
}









