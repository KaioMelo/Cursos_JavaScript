// Criar de forma literal
function func(){

}

// armazenar em uma variavel

const fun2 = function(){

}

// armazenar dentro de um array

const array = [function (a, b){ return a + b}, fun1, fun2]

// armazenar em um atributo de objeto

const obj = {}
obj.falar = function(){
  return 'Opa'
}

// Passar função como parametro

function run(fun){
  fun()
}

run(function(){console.log('Executando...')})

// uma função pode retornar/conter um função

function soma(a,b){
  return function(c){
    console.log(a + b + c)
  }
}