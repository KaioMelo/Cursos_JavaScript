/*Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
retornará o valor da aplicação sob o regime de juros compostos.*/

const jurosSimples = (c, j, t) => {
  return c + (c * j * t)
}

const jurosCompostos = (c, j, t) => {
  return c * (1 - j) ** t
}

console.log("Juros Simples: " + jurosSimples(800.00, 0.10, 2).toFixed(2))
console.log("Juros Composto: " + jurosCompostos(800.00, 0.10, 2).toFixed(2))