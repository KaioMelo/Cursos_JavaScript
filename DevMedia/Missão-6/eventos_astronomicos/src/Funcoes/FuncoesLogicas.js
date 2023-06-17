import ListaDeChuvas from "../Listas/ListaDeChuvas.js";

// Manipulação de Data para data atual
function FormatarDataAtual(data) {
  const dia = data.getDate().toString().padStart(2, "0");
  const mes = (data.getMonth() + 1).toString().padStart(2, "0");
  const ano = data.getFullYear().toString();

  return `${ano}-${mes}-${dia}`;
}

const dataAtual = new Date();
const dataFormatada = "2023-07-10";

// Manipulando datas de Inicio e Fim da Lista de chuvas de meteoros
function FormatarDataArrayHoje() {
  let datasHoje = [];
  ListaDeChuvas.forEach((e) => {
    let inicio = e.inicio;
    let formatInicio = inicio.replace("/", "-");
    let dataInicio = `${dataAtual.getFullYear()}-${formatInicio}`;

    let fim = e.fim;
    let formatFim = fim.replace("/", "-");
    let dataFim = `${dataAtual.getFullYear()}-${formatFim}`;

    if (dataInicio > dataFim) {
      dataFim = `${dataAtual.getFullYear() + 1}-${formatFim}`;
    }
    datasHoje.push([dataInicio, dataFim]);
  });
  return datasHoje;
}

function FormatarDataArrayProximos() {
  let datasProximas = [];
  ListaDeChuvas.forEach((e) => {
    let inicio = e.inicio;
    let formatInicio = inicio.replace("/", "-");
    let dataInicio = `${dataAtual.getFullYear()}-${formatInicio}`;
    let dividindoData = e.inicio.split("/");
    let mesInicial = Number(dividindoData[0]);
    const mesAtual = dataAtual.getMonth() + 1;
    if (mesAtual > mesInicial) {
      dataInicio = `${dataAtual.getFullYear() + 1}-${formatInicio}`;
    }
    datasProximas.push([dataInicio, mesInicial]);
  });
  return datasProximas;
}

// Recebe as formatações de Datas de hoje e da lista de array e retorna valor depois da condição
const ChuvasHoje = () => {
  const datasChuvas = FormatarDataArrayHoje();
  let chuvaEncontrada = false;
  let resultados = [];
  for (let i = 0; i < ListaDeChuvas.length; i++) {
    const [dataInicio, dataFim] = datasChuvas[i];
    let cont = 0;
    if (dataFormatada >= dataInicio && dataFormatada <= dataFim) {
      resultados.push({
        nome: ListaDeChuvas[i].nome,
        inicio: ListaDeChuvas[i].inicio,
        Fim: ListaDeChuvas[i].fim,
        itensidade: ListaDeChuvas[i].itensidade,
        hemisferio: ListaDeChuvas[i].hemisferio,
      });
      chuvaEncontrada = true;
    }
  }
  if (!chuvaEncontrada) {
    return false;
  }
  return resultados;
};

const ChuvaProximos2Meses = () => {
  const chuvasProximas = FormatarDataArrayProximos();
  const mesAtual = dataAtual.getMonth() + 1;
  const mesProximoss2 = mesAtual + 2
  let resultados = [];
  let chuvaEncontrada = false;
  for (let i in ListaDeChuvas) {
    const [mesInicial] = chuvasProximas[i];
    let cont = 0;
    if (mesAtual > mesInicial && mesAtual < mesProximoss2) {
      resultados.push({
        nome: ListaDeChuvas[i].nome,
        inicio: ListaDeChuvas[i].inicio,
        Fim: ListaDeChuvas[i].fim,
        itensidade: ListaDeChuvas[i].itensidade,
        hemisferio: ListaDeChuvas[i].hemisferio,
      });
      chuvaEncontrada = true;
    }
  }
  if (!chuvaEncontrada) {
    return false;
  }
  return resultados;
};

export { ChuvasHoje, ChuvaProximos2Meses };
