let padre = document.querySelector('.container')
let node = document.createElement('h2')
node.textContent = "Titulo de segundo nivel"
let texto = document.createTextNode("Palabra para el nodo de texto")
padre.appendChild(node)
padre.appendChild(texto)

let lista = document.querySelector('#list');
let html = document.createElement('li')
html.textContent = "HTML";
let css = document.createElement('li')
css.textContent = "CSS";

html.classList.add('item')
css.classList.add('item')

lista.append(html,css)

let card = document.querySelector('.card')
let lista_card = card.querySelector('#list');
let titulo = document.createElement('h2')
titulo.textContent = "Titulo de la card"

//card.insertAdjacentHTML("beforeend","<h2>Titulo de la card</h2>")

//card insert before
//card.insertBefore(titulo);


let beforebegin= document.createElement('li');
beforebegin.classList.add('item','before');
beforebegin.textContent = "Nuevo contenido ubicado antes de la lista ordenada";

let afterbegin = document.createElement('li');
afterbegin.classList.add('item')
afterbegin.textContent= "Nuevo texto ubicado al inicio de la lista ordenada";

let beforeend = document.createElement('li')
beforeend.classList.add('item','before')
beforeend.textContent = "Nuevo contenido ubicado al final de la lista";

let afterend = document.createElement('li')
afterend.classList.add('item')
afterend.textContent = "Nuevo contenido ubicado despues de la lista ordenada "

lista_card.insertAdjacentElement('beforebegin',beforebegin)
lista_card.insertAdjacentElement('beforeend',beforeend)
lista_card.insertAdjacentElement('afterbegin',afterbegin)
lista_card.insertAdjacentElement('afterend',afterend) 

//los dias de la semana son 

let card_dias = document.querySelector('#dias')

const dias = [
    {id:1,
    nombre:"Lunes",
    img: "https://picsum.photos/640/360",
    paragraph: "You can find out the ID of an image by looking at the Picsum-ID header, or the User Comment field in the EXIF metadata." 
    },{
        id:2,
    nombre:"Martes",
    img: "https://picsum.photos/640/360",
    paragraph: "You can find out the ID of an image by looking at the Picsum-ID header, or the User Comment field in the EXIF metadata." 
    },{
        id:3,
    nombre:"Miercoles",
    img: "https://picsum.photos/640/360",
    paragraph: "You can find out the ID of an image by looking at the Picsum-ID header, or the User Comment field in the EXIF metadata." 
    },{
        id:4,
        nombre:"Jueves",
        img: "https://picsum.photos/640/360",
        paragraph: "You can find out the ID of an image by looking at the Picsum-ID header, or the User Comment field in the EXIF metadata." 
    },{
        id:5,
        nombre:"Viernes",
        img: "https://picsum.photos/640/360",
        paragraph: "You can find out the ID of an image by looking at the Picsum-ID header, or the User Comment field in the EXIF metadata." 
    },{
        id:6,
        nombre:"Sabado",
        img: "https://picsum.photos/640/360",
        paragraph: "You can find out the ID of an image by looking at the Picsum-ID header, or the User Comment field in the EXIF metadata." 
    },{
        id:7,
        nombre:"Domingo",
        img: "https://picsum.photos/640/360",
        paragraph: "You can find out the ID of an image by looking at the Picsum-ID header, or the User Comment field in the EXIF metadata." 
    }
] 

dias.map((dia)=>{
    console.log(dia);
    let card = document.createElement('div')
    let card_header = document.createElement('div')
    let card_titulo = document.createElement('h2')
    let card_parrafo = document.createElement('p')
    let card_body = document.createElement('div')
    let card_img = document.createElement('img')

    card_body.classList.add('card__body')
    card_img.classList.add('card__img')
    card.classList.add('card')
    card_header.classList.add('card__header')
    card_titulo.classList.add('card__title')

    card_titulo.textContent = dia.nombre
    card_parrafo.textContent = dia.paragraph
    card_img.setAttribute('src',dia.img)
    card_img.setAttribute('alt',dia.nombre)
    
    card_body.append(card_img)
    card_body.append(card_parrafo)
    card_header.append(card_titulo)
    card.append(card_header)
    card.append(card_body)
    card_dias.append(card)
})
