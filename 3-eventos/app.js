import { comprobar } from "./modulo.js"

 

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








// const validar = (event) =>{
//      event.preventDefault();
    

    

    

//    if(nombre.value == "" || texto.test(nombre.value) == false ){
//         if(nombre.nextElementSibling){
//            nombre.nextElementSibling.remove()
//          }
//        nombre.classList.add('borde_rojo')  
//        let span = document.createElement('span');
//        span.textContent = "Error: este campo debe estar lleno"   
//        nombre.insertAdjacentElement('afterend',span)
//        nombre.focus();

       
       
       
//     } if(apellido.value == "" || texto.test(apellido.value) == false){
//         if(apellido.nextElementSibling){
//             apellido.nextElementSibling.remove()
//          }
        
//         apellido.classList.add('borde_rojo') 
//         let span = document.createElement('span');
//         span.textContent = "Error: este campo debe estar lleno"   
//         apellido.insertAdjacentElement('afterend',span)
//         apellido.focus();
        
         
//     } if(telefono.value == "" || numerico.test(telefono.value) == false){
//         if(telefono.nextElementSibling){
//             telefono.nextElementSibling.remove()
//          }
//         telefono.classList.add('borde_rojo')
//         let span = document.createElement('span');
//         span.textContent = "Error: este campo debe estar lleno"   
//         telefono.insertAdjacentElement('afterend',span)
//         telefono.focus();
        
         
        
//     } if(documento.value == ""){
//         if(documento.nextElementSibling){
//             documento.nextElementSibling.remove()
//          }
//         documento.classList.add('borde_rojo')
        
//         let span = document.createElement('span');
//         span.textContent = "Error: este campo debe estar lleno"   
//         documento.insertAdjacentElement('afterend',span)
//         documento.focus();
        
         
        
//     } if(usuario.value == ""){
//         if(usuario.nextElementSibling){
//             usuario.nextElementSibling.remove()
//          }
//         usuario.classList.add('borde_rojo')
//         let span = document.createElement('span');
//         span.textContent = "Error: este campo debe estar lleno"   
//         usuario.insertAdjacentElement('afterend',span)
//         usuario.focus();
        
         
        
//     } if(contrasena.value == "" || tamano.test(contrasena.value) == false){
//         if(contrasena.nextElementSibling){
//             contrasena.nextElementSibling.remove()
//          }
//         contrasena.classList.add('borde_rojo')
//         let span = document.createElement('span');
//         span.textContent = "Error: este campo debe estar lleno"   
//         contrasena.insertAdjacentElement('afterend',span)
//         contrasena.focus();
        
         
       
//     }
     
    
    


// }

const limpiar = (event) =>{
      
    if(event.target.value !== ""){
       event.target.classList.remove("borde_rojo");
       if(event.target.nextElementSibling){
        event.target.nextElementSibling.remove()
       }
    }

}

const hbilDeshabilBoton=()=>{
    if(checkbox.checked){
        boton.removeAttribute('disabled')
    }else{
        boton.setAttribute('disabled','')
    }
}



nombre.addEventListener('blur',limpiar)
apellido.addEventListener('blur',limpiar)
telefono.addEventListener('blur',limpiar)
documento.addEventListener('blur',limpiar)
usuario.addEventListener('blur',limpiar)
contrasena.addEventListener('blur',limpiar)

addEventListener('DOMContentLoaded',hbilDeshabilBoton)

checkbox.addEventListener('change',hbilDeshabilBoton)


btn.addEventListener('submit',comprobar)


btn.addEventListener("submit", comprobar);