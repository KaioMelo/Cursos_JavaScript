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
    let dataInicial = `${dataAtual.getFullYear()}-${formatInicio}`;
    let dividindoData = e.inicio.split("/");
    let mesInicial = Number(dividindoData[0]);
    const mesAtual = dataAtual.getMonth() + 1;
    const proximoMes = dataAtual.getMonth() + 3;
    if (mesAtual > mesInicial) {
      dataInicial = `${dataAtual.getFullYear() + 1}-${formatInicio}`;
    }
    if (dataFormatada < dataInicial && mesInicial < proximoMes) {
      datasProximas.push(e.ListaDeChuvas);
    }
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

const ChuvaProximos2Meses = (data) => {
  const chuvasProximas = FormatarDataArrayProximos();
  let resultados = [];
  let chuvaEncontrada = false;
  for (let i in chuvasProximas) {
    resultados.push({
      nome: ListaDeChuvas[i].nome,
      inicio: ListaDeChuvas[i].inicio,
      Fim: ListaDeChuvas[i].fim,
      itensidade: ListaDeChuvas[i].itensidade,
      hemisferio: ListaDeChuvas[i].hemisferio,
    });
    chuvaEncontrada = true;
  }
  if (!chuvaEncontrada) {
    return false;
  }
  return resultados;
};

export { ChuvasHoje, ChuvaProximos2Meses };
