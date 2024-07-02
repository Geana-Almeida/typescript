import readlinesync = require('readline-sync');
import { Queue } from "../interface/Queue";

const fila = new Queue<string>();
let res = 0;
let nomeCliente;

console.log("****************************************************************");

console.log("\n\n1 - Adicionar Cliente na Fila");
console.log("2 - Listar todos os Clientes");
console.log("3 - Retirar Cliente da Fila");
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
            nomeCliente = readlinesync.question("Digite o nome: ");
            fila.enqueue(nomeCliente);
            console.log("\nFila:")
            fila.printQueue()
            console.log("\nCliente Adicionado!")
            break

        case 2:
            if(fila.isEmpty() === true){
                console.log("\nPilha está vazia")
                break
            }
            console.log("\nLista de Clientes na Fila")
            fila.printQueue();
            break
            
        case 3:
            if(fila.isEmpty() === true){
                console.log("\nPilha está vazia")
                break
            }
            fila.dequeue()
            console.log("\nCliente foi chamado!")
            break

        default:
            console.log("\nOpcao inválida");
    }

    res = readlinesync.questionInt("\nInforme a opcao que deseja: ", {limitMessage: "Opcao invalida, insira um valor inteiro."});
}

console.log("Programa Finalizado!")