const readLine = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})
const minhaPrimeiraString = 'Primeira constante';
console.log(minhaPrimeiraString);
let leituraDeCampo;
let teste = 'teste';
readLine.question('Informe sua idade:', input => {
    leituraDeCampo = input;
    console.log(`o usuario digitou: ${leituraDeCampo} e nossa variavel teste é: ${teste}`);
});

