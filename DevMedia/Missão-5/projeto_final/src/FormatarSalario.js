import ListaDeSalarios from "./ListaDeSalarios.js";

const Lista = () => {
  ListaDeSalarios.forEach((e) => {
    let salario = e.salarios;
    let salarioFormatado = salario.toFixed(2).replace(".", ",");
    let ano = String(e.ano);
    console.log();
    console.log(`Salário mínimo: ${salarioFormatado.padStart(20, ".")}`);
    console.log(`Ano: ${ano.padStart(31, ".")}`);
    console.log();
  });
};

export default Lista;
