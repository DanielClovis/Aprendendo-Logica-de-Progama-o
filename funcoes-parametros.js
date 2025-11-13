/* const botao = document.querySelector("#btn")
const botao1 = document.querySelector("#btn1")
const botao2 = document.querySelector("#btn2")
const botao3 = document.querySelector("#btn3")

function soma() {
    let a = Number(prompt("Digite um Numero!!")) 
    let b = Number(prompt("Digite um Numero!!")) 
    // return a + b
    let soma = a + b

    alert(soma)
}

function divisao() {
    let a = Number(prompt("Digite um Numero!!")) 
    let b = Number(prompt("Digite um Numero!!"))
    let divisao = a / b 
    alert(divisao)
}

function subtracao() {
    let a = Number(prompt("Digite um Numero!!")) 
    let b = Number(prompt("Digite um Numero!!"))
    let subtracao = a - b 
    alert(subtracao)
}

function multiplicacao() {
    let a = Number(prompt("Digite um Numero!!")) 
    let b = Number(prompt("Digite um Numero!!"))
    let multiplicacao = a * b 
    alert(multiplicacao)
}

botao.addEventListener("click", soma)
botao1.addEventListener("click", divisao)
botao2.addEventListener("click", subtracao)
botao3.addEventListener("click", multiplicacao)
 */






// let somaValores = soma(5, 3) tambem iria funcionar ai no console.log eu iria colocar somaValores para sair o resultado
// console.log(soma(a, b))  /* Aqui saiu a soma por que no fuction ja esta a+b */

/* console.log(soma(5, 3)) */



const btnsoma = document.querySelector("#soma")
const btnsubtracao = document.querySelector("#subtracao")
const btnmultiplicacao = document.querySelector("#multiplicacao")
const btndividir = document.querySelector("#dividir")
const inputPrimeiroNumero = document.querySelector("#primeiroNumero")
const inputSegundoNumero = document.querySelector("#segundoNumero")
const divRes = document.querySelector(".res")

function soma() {
    let resultado = Number(inputPrimeiroNumero.value) + Number (inputPrimeiroNumero.value)
    divRes.innerText = resultado
}
function subtracao() {
    let resultado = Number(inputPrimeiroNumero.value) - Number (inputPrimeiroNumero.value)
    divRes.innerText = resultado
}
function multiplicacao() {
    let resultado = Number(inputPrimeiroNumero.value) * Number (inputPrimeiroNumero.value)
    divRes.innerText = resultado
}
function dividir() {
    let resultado = Number(inputPrimeiroNumero.value) / Number (inputPrimeiroNumero.value)
    divRes.innerText = resultado
}



btnsoma.addEventListener("click", soma)
btnsubtracao.addEventListener("click", subtracao)
btnmultiplicacao.addEventListener("click", multiplicacao)
btndividir.addEventListener("click", dividir)