import rlsync from "readline-sync";
import Lista from "./FormatarSalario.js";

console.log("Escolha uma das alternativas: ");
console.log("1 - Lista os salários minímos de 2010 à 2020");
console.log("2 - Lista os índices IPCA de 2010 à 2020");
console.log("3 - comparação entre o percentual de aimento salarial e o IPCA");

const resp = rlsync.question("Digite o numero da sua escolha: ");

switch (resp) {
  case "1":
    Lista()
    break;
  case "2":
    console.log(`Opção escolhida : ${resp}`);
    break;
  case "3":
    console.log(`Opção escolhida : ${resp}`);
    break;
  default:
    console.log("Opção Inválida!");
    break;
}
