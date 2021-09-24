/*
por id: getElementById()
por nome: getElementsByNome()
por seletor: querySelector()
por classe: getElementsByClassName()
por tag: getElementByTagName()
*/

/*script pagina de contato*/

let nome = window.document.getElementById('nome')
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')
let mapa = document.querySelector('#mapa')
let nomeOk = false
let emailOk = false
let assuntoOk = false

nome.style.width = '100%'
email.style.width = '100%'

function validaNome() {
let txtNome = document.querySelector('#txtNome')
if (nome.value.length < 3){
txtNome.innerHTML = 'Nome invalido!'
txtNome.style.color = 'red'
} else {
    txtNome.innerHTML = 'Nome valido!'
    txtNome.style.color = 'green'
    nomeOk = true
    }   
}
function validaEmail () {
    let txtEmail = document.querySelector('#txtEmail')
    if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1){
    txtEmail.innerHTML = 'Email invalido!'
    txtEmail.style.color = 'red'
    } else {
        txtEmail.innerHTML = 'Email valido!'
        txtEmail.style.color = 'green'
        emailOk = true
        }
    }
function validaAssunto (){
    let txtAssunto = document.querySelector('#txtAssunto')
    if (assunto.value.length >= 100){
        txtAssunto.innerHTML = 'Texto muito grande! Escreva NO MAXIMO 100 caracteres!'
        txtAssunto.style.color = 'red'
        txtAssunto.style.display = 'block'
    } else {
        txtAssunto.style.display = 'none'
        assuntoOk = true
    }
    
}
function validaEnviar (){
    if (nomeOk == true && emailOk == true && assuntoOk == true){
        alert ('Formulario enviado com sucesso')
    } else {
        alert ('Preencha corretamente o formulario')
    }
}

function mapaZoom (){
    mapa.width="600" 
    mapa.height="550"
}
function mapaNormal(){
    mapa.width="300" 
    mapa.height="225"
}


