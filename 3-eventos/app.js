const btn = document.querySelector('form')
const nombre = document.querySelector('[name=nombre]')
const apellido = document.querySelector('[name=Apellido]')
const telefono = document.querySelector('[name=telefono]')
const documento = document.querySelector('[name=Documento]')
const usuario = document.querySelector('[name=Usuario]')
const contrasena = document.querySelector('[name=Contrasena]')


//Expresion regular 
const texto = /^[a-zA-Z]+$/;
const numerico = /^[0-9]+$/
const tamaño = /^[a-zA-Z0-9_*.,]{2,8}$/

const validar = (event) =>{
    event.preventDefault();
    if(nombre.value == "" || texto.test(nombre.value) == false ){
       alert("Tiene que tener un valor el  nombre o ser de tipo texto")    
       nombre.focus();
    }

    if(apellido.value == "" || texto.test(apellido.value) == false){
        alert("Tiene que tener un valor el apellido o ser de tipo texto")
        apellido.focus();
    }
    if(telefono.value == "" || numerico.test(telefono.value) == false){
        alert("Tiene que tener un valor el telefono o ser de tipo numerico")
        telefono.focus();
    }
    if(documento.value == ""){
        alert("Tiene que tener un valor el documento")
        documento.focus();
    }

    if(usuario.value == ""){
        alert("Tiene que tener un valor el usuario")
        usuario.focus();
    }

    if(contrasena.value == "" || tamaño.test(contrasena.value) == false){
        alert("Tiene que tener un valor la contraseña y debe tener minimo 2 caracteres y maximo 8")
        contrasena.focus();
    }
    


}

btn.addEventListener('submit',validar)

