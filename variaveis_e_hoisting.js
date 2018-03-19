var percentualImposto = 0.15;
var totalImposto = valor * percentualImposto;

console.log('Total imposto a pagar', totalImposto);

var valor = 100;

// HOISTING
/*
var percentualImposto, totalImposto, valor;
percentualImposto = 0.15;
totalImposto = valor * percentualImposto;
console.log('Total imposto a pagar', totalImposto);
valor = 100;
*/

//******************************************************************************************************

var percentualImposto = 0.15;
valor = 100;
var totalImposto = valor * percentualImposto;

console.log('Total imposto a pagar', totalImposto);

var valor;

// HOISTING
/*
var percentualImposto, valor, totalImposto;
percentualImposto = 0.15;
valor = 100;
totalImposto = valor * percentualImposto;
console.log('Total imposto a pagar', totalImposto);
*/