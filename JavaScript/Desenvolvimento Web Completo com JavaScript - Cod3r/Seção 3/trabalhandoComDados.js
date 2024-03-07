// variavies
let objeto = "Caneta";
let quantidade = 10;
let preco = 6.4;
let imposto = 1.5;
let precoFinal = preco + imposto; //calculando 2 variaveis e colocando em outra variavel
// mostrando as variavies
console.log(objeto);
console.log(quantidade);
console.log(preco);
console.log(imposto);
console.log(precoFinal);
// exemplos de uso
preco = 19.90;
let desconto = 0.4;
let precoComDesconto = preco*(1-desconto);
console.log(precoComDesconto);
console.log(preco*(1-desconto));
console.log(preco-desconto*preco);
// frases em console por concatenação

let nome = "Caderno";
let categoria = "Papelaria";
console.log("Produto: " + nome
  + ", Categoria: " + categoria
  + ", Preço: " + preco
  + ", Desconto: " + desconto);
// Dados basicos
/*
 * console.log(typeof X);
 * number = numero
 * string = palavras, conjuntos de caracteries
 * bool = boleano, True ou False, 1 ou 0
 *
 */
let numero = 30;
console.log(typeof 30);
console.log(typeof numero);
console.log(typeof 0.4);
console.log(typeof desconto);
console.log(typeof "Caderno");
console.log(typeof nome);
let buuleano = true;
console.log(typeof true);
console.log(typeof buuleano);

// Torcando valores de variavies
let numero1 = 3;
console.log(numero1);
numero1 = 10;
console.log(numero1);
// como transforma em constante? const numero1 no lugar do let
const numero2 = 11;
console.log(numero2);
// numero2 = 14;
// console.log(numero2); TypeError: Assignment to constant variable.

// Desafio Calculo da area
// circunferencia >> PI * R * R >> PI = 3.141592
const pi = 3.141592;
let raio = 10;
let areaDaCircunferencia = pi * raio * raio;
console.log("Area da circunferencia é: " + areaDaCircunferencia);
console.log(Math.PI);

areaDaCircunferencia = Math.PI * raio * raio;
console.log("Area da circunferencia é: " + areaDaCircunferencia);
// Desafio troca
// a = 7 e b = 94, tem que fazer a = 94 e b = 7
let a = 7;
let b = 94;
console.log("Antes da troca");
console.log("a: "+ a);
console.log("b: "+ b);
let aux = a;
a = b;
b = aux;
console.log("Depois da troca");
console.log("a: "+ a);
console.log("b: "+ b);

// outros teste
console.log("---------");
a = 7;
b = 94;
[a,b]=[b,a] // a recebe b e b recebe a
console.log("a: "+ a);
console.log("b: "+ b);
// bitwise XOR
console.log("---------");
a = 7;
b = 94;
console.log("a: "+ a);
console.log("b: "+ b);
a = a^b;
console.log("a: "+ a);
b = b^a;
console.log("b: "+ b);
a = a^b;
console.log("a: "+ a);
console.log("b: "+ b);