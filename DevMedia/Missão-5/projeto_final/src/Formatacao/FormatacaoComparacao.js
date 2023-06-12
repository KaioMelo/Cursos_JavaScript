import ListaDeSalario from "../Listas/ListaDeSalarios.js";
import ListaDeInflacao from "../Listas/ListaDeInflacao.js";

const Comparacao = () => {
  let salarioAnterior = "0";
  for (let i in ListaDeSalario) {
    let ano = String(ListaDeSalario[i].ano).padStart(30, ".");
    let salario = ListaDeSalario[i].salarios;
    let salarioFormatado = salario
      .toFixed(2)
      .replace(".", ",")
      .padStart(19, ".");

    console.log();
    console.log(`Ano: ${ano}`);
    console.log(`Salário mínimo: ${salarioFormatado}`);

    if (salarioAnterior != 0) {
      let diferenca = salario - salarioAnterior;
      let crescimento = (diferenca / salarioAnterior) * 100;
      let crescimentoFormatado = crescimento
        .toFixed(2)
        .replace(".", ",")
        .padStart(12, ".");
      console.log(`Crescimento Salarial: ${crescimentoFormatado}%`);
    } else {
      console.log(`Crescimento Salarial: -`);
    }
    let ipca = ListaDeInflacao[i].ipca;
    let ipcaFormatado = ipca.toFixed(2).replace(".", ",").padStart(19, ".");
    console.log(`Inflação IPCA: ${ipcaFormatado}%`);
    console.log();

    salarioAnterior = salario;
  }
};

export default Comparacao;
