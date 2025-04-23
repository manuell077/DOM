const btn = document.querySelector('form')
const nombre = document.querySelector('[name=nombre]')
const apellido = document.querySelector('[name=apellido]')
const telefono = document.querySelector('[name=telefono]')
const documento = document.querySelector('[name=documento]')
const usuario = document.querySelector('[name=usuario]')
const contrasena = document.querySelector('[name=contrasena]')

const validar = (event) =>{
    event.preventDefault();
    if(nombre.value == ""){
       alert("Tiene que tener un valor el  nombre")    
       nombre.focus();
    }
}

btn.addEventListener('submit',validar)

