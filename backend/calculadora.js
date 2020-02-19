'use strict'

var params= process.argv.slice(2);

let num1 = parseFloat(params[0]);
let num2 = parseFloat(params[1]);

let res = `
La suma es de: ${ num1 + num2 };
La resta es de: ${ num1 - num2 };
La multiplicacion es de: ${ num1 * num2 };
La division es de: ${ num1 / num2 };
`;

console.log("Hola mundo con NodeJS");
console.log(res);