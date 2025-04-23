let win = window;
let dom = document;

let p = document.querySelector('main p')
let container = document.querySelectorAll('.container')
let api = document.querySelector('#api')
let formulario = dom.forms;
let imagenes = dom.images;
let estilos = dom.styleSheets;

//formualrios
//console.log(formulario)
//imagenes
//console.log(imagenes)
//estilos 
//console.log(estilos)

let lista = document.querySelectorAll('ul.list > li.item');


let card = document.querySelectorAll('div.cards >  div.card')

console.log(card)

let cards = document.querySelector('div.cards')

console.log("padre",  cards.parentElement)
console.log("Hermano",cards.previousElementSibling)

let body = document.querySelector('body')
console.log("body",body.previousElementSibling)

//console.log(lista)

api.textContent = "Ya no quiero estudiar mas";


//console.log(api)
console.clear();

let elementos = document.querySelector('#elementos')
elementos.textContent = "Nuevo texto"
elementos.innerHTML = "<p>textos</p> <p>texto</p>"


setTimeout(()=>{
body.classList.add('bg-read')

},6000)

