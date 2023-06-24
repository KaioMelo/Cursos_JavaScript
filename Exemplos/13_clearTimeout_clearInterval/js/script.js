//  clearTimeout 

var x = 0

var myTimer = setTimeout(function (){
  console.log("O x é 0")
}, 1000)

x = 5

if(x > 5){
  clearTimeout(myTimer)
  console.log("O x passou de 0")
}

// clearInterval

var myInterval = setInterval(function (){
  console.log("Imprimindo Interval")
}, 1000)

setTimeout (function() {
  clearInterval(myInterval)
  console.log("Não precisamos mais repetir!")
}, 1500)