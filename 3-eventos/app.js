import { comprobar , outFocus, limitar, validarLetras, validarNumeros, validarCaracteres} from "./modulo.js"

 

const btn = document.querySelector('form')
const nombre = document.querySelector('[name=nombre]')
const apellido = document.querySelector('[name=Apellido]')
const telefono = document.querySelector('[name=telefono]')
const documento = document.querySelector('[name=Documento]')
const usuario = document.querySelector('[name=Usuario]')
const contrasena = document.querySelector('[name=Contrasena]')
const checkbox = document.querySelector('#politica')
const boton = document.querySelector('#btn_validar')
 
//Expresion regular 
const texto = /^[a-zA-Z]+$/;
const numerico = /^[0-9]+$/
const tamano = /^[a-zA-Z0-9_*.,]{2,8}$/











const hbilDeshabilBoton=()=>{
    if(checkbox.checked){
        boton.removeAttribute('disabled')
    }else{
        boton.setAttribute('disabled','')
    }
}




nombre.addEventListener("keypress",limitar)

nombre.addEventListener('keydown',validarLetras)
apellido.addEventListener('keydown',validarLetras)
telefono.addEventListener('keydown',validarNumeros)
documento.addEventListener('keydown',validarNumeros)
usuario.addEventListener('keydown',validarCaracteres)
contrasena.addEventListener('keydown',validarCaracteres)




nombre.addEventListener('blur',outFocus)
apellido.addEventListener('blur',outFocus)
telefono.addEventListener('blur',outFocus)
documento.addEventListener('blur',outFocus)
usuario.addEventListener('blur',outFocus)
contrasena.addEventListener('blur',outFocus)

addEventListener('DOMContentLoaded',hbilDeshabilBoton)

checkbox.addEventListener('change',hbilDeshabilBoton)


btn.addEventListener('submit',comprobar)

