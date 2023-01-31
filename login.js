let signupBtn=document.getElementById('signupBtn')
let signinBtn=document.getElementById('signinBtn')
let nameField=document.getElementById('nameField')
let title=document.getElementById('title')

signinBtn.onclick=function(){
    nameField.style.maxHeight="0";
    title.innerHTML='sign in';
    signupBtn.classList.add('disable')
    signinBtn.classList.remove('disable')
}
signupBtn.onclick=function(){
    nameField.style.maxHeight="60px";
    title.innerHTML='sign up';
    signupBtn.classList.remove('disable')
    signinBtn.classList.add('disable')
}

const showPassword= document.querySelector('#show-password');
const Passwordfield= document.querySelector('#password');

showPassword.addEventListener('click',function(){
    this.classList.toggle("fa-eye-slash");
    const type=Passwordfield.getAttribute('type')
    === 'password' ? 'text' : 'password';
    Passwordfield.setAttribute('type', type)
})
