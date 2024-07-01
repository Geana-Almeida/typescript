import readlinesync = require('readline-sync');

const numeros: Set<number> = new Set<number>();


for(let i = 0; i < 10; i++){
    numeros.add(readlinesync.questionInt("Digite um numero inteiro: ", {limitMessage: "Numero invalido, insira um valor inteiro."}))
}



console.log("Listar dados do Set: ");
for(let numero of numeros){
    console.log(numero)
}