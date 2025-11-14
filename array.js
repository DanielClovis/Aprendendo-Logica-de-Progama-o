let filmes = ["A Hora do pesadelo", "A Hora do Rush", "Harry Potter 1", "A Casa de Cera" ]

filmes[1] = "Harry potter2" /* fazendo assim ele seta o filme da forma que eu quero */

filmes.push("Quarteto Fantastico") /* Push adiciona no final da lista  */
filmes.unshift("Homem aranha 3") /* o unshift adiciona sempre no começo */
filmes.pop() /* o pop sempre remove o indice do array o ultimo sempre */
filmes.shift() /* remove o primeiro indice do array */
console.log(filmes)
// console.log(filmes[0])
// console.log(filmes[1])
// console.log(filmes[2])
// console.log(filmes[3])
// console.log(filmes[4])

for (const filme of filmes) {
    console.log(filme)
}





// for(let i = 0; i < filmes.length; i++){
//     console.log(filmes[i])
// }


/* /*               0       1         2           3 */
/* let frutas = ["Maçã", "Banana", "Abacaxi", "Laranja"]
console.log()
console.log(frutas[frutas.length - 1]) */ 