import ListaDeInflacao from "../Listas/ListaDeInflacao.js"

const ListaInflacao = () => {
    ListaDeInflacao.forEach(e => {
        let ano = String(e.ano)
        let ipca = e.ipca 
        let ipcaFormatado = ipca.toFixed(2).replace('.', ",")
        console.log()
        console.log(`Ano: ${ano.padStart(31, ".")}`)
        console.log(`Inflação IPCA: ${ipcaFormatado.padStart(20, ".")}%`)
        console.log()
    });
}

export default ListaInflacao;