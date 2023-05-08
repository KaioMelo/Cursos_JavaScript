import rdlinesync from "readline-sync";

let valor_devido = rdlinesync.question("Informe o valor devido: ");
let vencimento = rdlinesync.question(
  "Informe quantos dias se passaram desde o vencimento do boleto: "
);

if (valor_devido > 0) {
  if (vencimento > 0) {
    if (vencimento > 15) {
      const taxa_juros = 10;
      let valor_total = ((valor_devido * taxa_juros) / 100) + Number(valor_devido);
      console.log("Valor original da dívida: R$ " + valor_devido);
      console.log("Dias atrasado: " + vencimento);
      console.log("Taxa de Juros: " + taxa_juros + "%");
      console.log("Valor total com juros: R$ " + valor_total);
    } else {
      const taxa_juros = 5;
      let valor_total = ((valor_devido * taxa_juros) / 100) + Number(valor_devido);
      console.log("Valor original da dívida: R$ " + valor_devido);
      console.log("Dias atrasado: " + vencimento);
      console.log("Taxa de Juros: " + taxa_juros + "%");
      console.log("Valor total com juros: R$ " + valor_total);
    }
  } else {
    console.log("Você está em dia!");
  }
} else {
  console.log("O valor da divida deve ser maior que zero!");
}
