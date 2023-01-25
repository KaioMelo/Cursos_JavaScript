const escola = 'Cod3r';

console.log(escola.charAt(4)); // retorna 1 caractere
console.log(escola.charAt(5));
console.log(escola.charCodeAt(3)); // cogido relacionado a tebela ASC
console.log(escola.indexOf('o')); // posição do valor

console.log(escola.substring(1));
console.log(escola.substring(0, 3));

console.log('Escola '.concat(escola).concat('!'));
console.log('Escola ' + escola + '!');
console.log(escola.replace(3,'e')); //substitui palavras

console.log('Ana,Maria,Pedro'.split(','));//transforma em um array
