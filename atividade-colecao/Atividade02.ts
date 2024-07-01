import readlinesync = require("readline-sync");

const numeros: Array<number> = new Array<number>(2, 5, 1, 3, 4, 9, 7, 8, 10, 6);
let consultarNum;

let numeroDigitado = readlinesync.questionInt("Informe um numero que deseja consultar dentro do array: ", {limitMessage: "Numero invalido, insira um valor inteiro."})

consultarNum = numeros.indexOf(numeroDigitado);

if(consultarNum != -1){
    console.log(`O numero ${numeroDigitado} esta localizado na posicao: ${consultarNum}`)
}
else{
    console.log(`O numero ${numeroDigitado} nao foi encontrado.`)
}