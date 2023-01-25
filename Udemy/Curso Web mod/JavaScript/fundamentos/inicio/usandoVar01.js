{
  {
    {
      var sera = 'será!!' // variavel criada dentro de bloco é visivel fora do bloco
      console.log(sera)
    }
  }
}

console.log(sera)

function teste(){ // variavel criada dentro de função só é visivel dentro de função
  var local = 123
  console.log(local)
}

teste()