import ListaDeSalarios from "./ListaDeSalarios.js";

const ListaSalario = () => {
  ListaDeSalarios.forEach((e) => {
    let salario = e.salarios;
    let salarioFormatado = salario.toFixed(2).replace(".", ",");
    let ano = String(e.ano);
    console.log();
    console.log(`Salário mínimo: ${salarioFormatado.padStart(20, ".")} R$`);
    console.log(`Ano: ${ano.padStart(31, ".")}`);
    console.log();
  });
};

export default ListaSalario;
