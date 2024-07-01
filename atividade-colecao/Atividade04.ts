import readlinesync = require('readline-sync');

const numeros: Set<number> = new Set<number>([2, 5, 1, 3, 4, 9, 7, 8, 10, 6]);
let verificarNum = false

let verificarNumero = readlinesync.questionInt("Digite o numero que voce deseja encontrar: ", {limitMessage: "Numero invalido, informe um numero inteiro."})

for(let numero of numeros){
    if(verificarNumero === numero){
        verificarNum = true
    }
}

if(verificarNum === true){
    console.log(`O numero ${verificarNumero} foi encontrado!`);
}else{
    console.log(`O numero ${verificarNumero} nao foi encontrado!`);
}

