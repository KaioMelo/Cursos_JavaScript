import ListaDeChuvas from "../Listas/ListaDeChuvas.js";

// Manipulação de Data para data atual
function FormatarDataAtual(data) {
  const dia = data.getDate().toString().padStart(2, "0");
  const mes = (data.getMonth() + 1).toString().padStart(2, "0");
  const ano = data.getFullYear().toString();

  return `${ano}-${mes}-${dia}`;
}

const data = new Date();
const dataAtual = FormatarDataAtual(data);
const dataProximas = (data.getMonth + 1 < 11)?data.getMonth + 3:data.getMonth + 1;

// Manipulando datas de Inicio e Fim da Lista de chuvas de meteoros
function FormatarDataArrayHoje() {
  let datasHoje = [];
  ListaDeChuvas.forEach((e) => {
    let inicio = e.inicio;
    let formatInicio = inicio.replace("/", "-");
    let dataInicio = `${data.getFullYear()}-${formatInicio}`;

    let fim = e.fim;
    let formatFim = fim.replace("/", "-");
    let dataFim = `${data.getFullYear()}-${formatFim}`;

    if (dataInicio > dataFim) {
      dataFim = `${data.getFullYear() + 1}-${formatFim}`;
    }
    datasHoje.push([dataInicio, dataFim]);
  });
  return datasHoje;
}

function FormatarDataArrayProximos() {
  let datasProximas = [];
  let chuvaEncontrada = false;

  ListaDeChuvas.forEach((e) => {
    let inicio = e.inicio;

    let formatInicio = inicio.replace("/", "-");
    let dataInicial = `${data.getFullYear()}-${formatInicio}`;

    let dividindoData = inicio.split("/");
    let mesInicial = String(dividindoData[0]);

    const mesAtual = data.getMonth() + 1;

    if (mesAtual > mesInicial) {
      dataInicial = `${data.getFullYear() + 1}-${formatInicio}`;
    }
    if (dataAtual < dataInicial && dataInicial < dataProximas) {
      datasProximas.push(e.ListaDeChuvas);
      chuvaEncontrada = true;
    }
  });
  if (!chuvaEncontrada) {
    return false;
  }
  return datasProximas;
}

// Recebe as formatações de Datas de hoje e da lista de array e retorna valor depois da condição
const ChuvasHoje = () => {
  const datasChuvas = FormatarDataArrayHoje();
  let chuvaEncontrada = false;
  let resultados = [];
  for (let i = 0; i < ListaDeChuvas.length; i++) {
    const [dataInicio, dataFim] = datasChuvas[i];
    if (dataAtual >= dataInicio && dataAtual <= dataFim) {
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
