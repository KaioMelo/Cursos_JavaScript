import {
  ChuvasHoje,
  ChuvaProximos2Meses,
} from "./src/Funcoes/FuncoesLogicas.js";

console.log(`Chuva de meteoros`);

// Chame as funções e exiba os resultados no chatbot
const chuvasDeHoje = ChuvasHoje();
if (chuvasDeHoje === false) {
  console.log("Não há previsão de chuva para hoje.");
} else {
  console.log(`Chuvas podem ser vistas hoje`);
  chuvasDeHoje.forEach((chuva) => {
    console.log(chuva);
  });
}

const chuvasProximos2Meses = ChuvaProximos2Meses();
if (chuvasProximos2Meses === false) {
  console.log("Não há previsão de chuva para os próximos dois meses.");
} else {
  console.log(`Próximos`);
  chuvasProximos2Meses.forEach((chuva) => {
    console.log(chuva);
  });
}
