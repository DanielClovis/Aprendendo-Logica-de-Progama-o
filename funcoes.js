const botao = document.querySelector("#btn")
function chamaFuncao() {
    alert("Ola")
    segundaFuncao()
}

function segundaFuncao() {
    alert("Segunda função chamada")
    terceiraFuncao()
}

function terceiraFuncao() {
    alert("Terceira Funcao chamada")
    quartaFuncao()
}

function quartaFuncao() {
    alert("Quarta Funcao chamada")
    quintaFuncao()
}

function quintaFuncao() {
    alert("Quinta Funcao chamada")
}


botao.addEventListener("click", chamaFuncao)