// Variáveis
// São  uma forma de identificar quem é quem
// Da um nome para um pedaço do código
// É como criar uma pasta, para guardar a coisas
//FUNÇÕES
//É um trecho de código que só funciona quando é chamado
//document = ir no HTML
//querySelector = faz a busca
let bobEsponja = "Calça Quadrada"
console.log("Bob Esponja é lindo")

function Bob(){
    console.log("Primeira Função")
}

let formulario = document.querySelector(".formulario")

function aparecerFormulario(){
formulario.style.left = "50%"
}

function desaparecerFormulario(){
    formulario.style.left = "-50%"
}