/* somar todos os valores | 

e dividir pelo numero total de valores */

let nota1 = Number (prompt("Digite a primeira nota"))
let nota2 = Number (prompt("Digite a segunda nota"))
let nota3 = Number (prompt("Digite a terceira nota"))
let nota4 = Number (prompt("Digite a quarta nota"))

let soma = nota1 + nota2 + nota3 + nota4
let media = soma / 4

/* eu uso soma dentro da media para eu conseguir pegar o valor total 
da soma para dividir e sair o resultado no alert */


if(media >=8){
    alert("Voce foi aprovado!")

}else{
    alert("Voce foi reprovado!")
}