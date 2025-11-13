const botao = document.querySelector("#botao")
const titulo = document.querySelector("#titulo")

function trocaTexto(){
    titulo.innerText = "Santastico"
}   

botao.addEventListener("click", trocaTexto)