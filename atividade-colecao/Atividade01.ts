import readlinesync = require("readline-sync");

const cores: Array<string> = new Array<string>()

for(let i = 0; i < 5; i++){
    cores.push(readlinesync.question("Informe a cor que deseja adicionar: "));
}

console.log("\nListar todas as cores: ")
for(let cor of cores){
    console.log(cor)
}

console.log("\nOrdenar as cores: ");
cores.sort();
for(let cor of cores){
    console.log(cor)
}

