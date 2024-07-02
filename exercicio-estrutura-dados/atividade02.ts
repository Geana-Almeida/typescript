import readlinesync = require('readline-sync');
import { Stack } from '../interface/Stack';


const pilha = new Stack<string>();
let res = 0;
let nomeLivro;

console.log("****************************************************************");

console.log("\n\n1 - Adicionar Livro na pilha");
console.log("2 - Listar todos os livros");
console.log("3 - Retirar livro da pilha");
console.log("0 - Sair");

console.log("\n\n****************************************************************");

res = readlinesync.questionInt("Informe a opcao que deseja: ", {limitMessage: "Opcao invalida, insira um valor inteiro."});

while(res < 0 || res > 3){
    console.log("Opcao inválida");
    res = readlinesync.questionInt("Informe a opcao que deseja: ", {limitMessage: "Opcao invalida, insira um valor inteiro."});
}


while(res != 0){
    switch(res){
        case 1:
            nomeLivro = readlinesync.question("Informe o nome do livro que deseja adicionar: ");
            pilha.push(nomeLivro);
            console.log("\nLivro adicionado!");
            break

        case 2:
            if(pilha.isEmpty() === true){
                console.log("\nPilha está vazia")
                break
            }
            console.log("\nPilha:")
            pilha.printStack();
            break
            
        case 3:
            if(pilha.isEmpty() === true){
                console.log("\nPilha está vazia")
                break
            }
            pilha.pop()
            console.log("\nUltimo livro removido.")
            break

        default:
            console.log("\nOpcao inválida");
    }

    res = readlinesync.questionInt("\nInforme a opcao que deseja: ", {limitMessage: "Opcao invalida, insira um valor inteiro."});
}

console.log("Programa Finalizado!")
