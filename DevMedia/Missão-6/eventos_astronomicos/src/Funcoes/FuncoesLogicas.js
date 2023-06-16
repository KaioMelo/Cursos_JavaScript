import ListaDeChuvas from "../Listas/ListaDeChuvas.js";

// Manipulação de Data para data atual
function FormatarDataAtual(data) {
  const dia = data.getDate().toString().padStart(2, "0");
  const mes = (data.getMonth() + 1).toString().padStart(2, "0");
  const ano = data.getFullYear().toString();

  return `${ano}-${mes}-${dia}`;
}

const dataAtual = new Date();
const dataFormatada = FormatarDataAtual(dataAtual);

// Manipulando datas de Inicio e Fim da Lista de chuvas de meteoros
function FormatarDataArrayHoje() {
  let datas = [];
  const mesAtual = dataAtual.getMonth() + 1;
  ListaDeChuvas.forEach((e) => {
    let inicio = e.inicio;
    // dividindo uma data com formato 00/00 em 2 arrays
    let dividindoData = e.inicio.split("/");
    let mesInicial = Number(dividindoData[0]);
    // formatando e trocando sianl de barra / por -
    let formatInicio = inicio.replace("/", "-");
    let dataInicio = `${dataAtual.getFullYear()}-${formatInicio}`;

    let fim = e.fim;
    let formatFim = fim.replace("/", "-");
    let dataFim = `${dataAtual.getFullYear()}-${formatFim}`;

    if (dataInicio > dataFim) {
      dataFim = `${dataAtual.getFullYear() + 1}-${formatFim}`;
    }
// PAREI AQUI -----
    if (mesAtual > mesInicial) {
      dataInicio = `${dataAtual.getFullYear() + 1}-${formatFim}`;
    }

    datas.push([dataInicio, dataFim, mesInicial]);
  });

  return datas;
}

// Recebe as formatações de Datas de hoje e da lista de array e retorna valor depois da condição
const ChuvasHoje = () => {
  const datasChuvas = FormatarDataArrayHoje();
  let chuvaEncontrada = false;

  for (let i = 0; i < ListaDeChuvas.length; i++) {
    const [dataInicio, dataFim] = datasChuvas[i];
    let cont;
    if (dataFormatada >= dataInicio && dataFormatada <= dataFim) {
      return [dataAtual, dataInicio, dataFim];
      cont += 1;
      chuvaEncontrada = true;
    }
  }
  if (!chuvaEncontrada) {
    console.log("Não há previsão de chuva para hoje.");
  }
};

const ChuvaProximos2Meses = () => {};

export default ChuvasHoje;
