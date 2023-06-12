import ListaDeSalario from "../Listas/ListaDeSalarios.js"
import ListaDeInflacao from "../Listas/ListaDeInflacao.js"

const Comparacao = () => {
    for(let i in ListaDeSalario){
        let ano = ListaDeSalario[i].ano
        let salario = ListaDeSalario[i].salarios
        let diferenca = salario- salario
        let crescimento = (diferenca / salario) * 100
        console.log(`Ano: ${ano}`)
        console.log(`Salário mínimo: ${salario}`)
        console.log(`Crescimento Salarial: ${crescimento}`)
    }
}

export default Comparacao