export const comprobar = (e) =>{
    e.preventDefault();
    
    console.log(e.target.children)
     
    const campos = [...e.target].filter((elemento)=>{
          return elemento.hasAttribute('required')
    })
    campos.forEach(campo =>{
        console.log(campo)
        if(campo.value === ""){
            if(campo.nextElementSibling){
                 campo.nextElementSibling.remove()
             }
            campo.classList.add('borde_rojo')
            let span = document.createElement('span')
            span.textContent = "Errorrrr"
            campo.insertAdjacentElement('afterend',span)

        }
    })
}