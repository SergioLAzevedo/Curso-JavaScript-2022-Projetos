let num1 = 1
let num2 = 2

num1++
console.log(num1)

--num1
console.log(num1)

console.log(++num1 === num2--)  // devido ao decremento no final a comparacao da verdadeira, isso acaba gerando confusao 
console.log(num1 === num2)
