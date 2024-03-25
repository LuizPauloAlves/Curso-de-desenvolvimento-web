console.log("sentença de codigo");
{
  console.log("bloco de codigo");
}
//------------------------------------
// Variaveis e constantes
const constante = "Isso eh uma constante"; //constante
console.log(constante);
let variavel = "Isso eh uma variavel"; //variavel
console.log(variavel);
variavel = "mudando o valor da variavel";
console.log(variavel);

// tente sempre usar const, caso precise ser uma variavel, apos perceber mude de const para let
//------------------------------------
// tipagem fraca
let tipagemFraca = 'legal';
console.log(tipagemFraca);
console.log(typeof tipagemFraca); //verifica o tipo => typeof
tipagemFraca = 3.1415;
console.log(tipagemFraca);
console.log(typeof tipagemFraca);
// a tipagem fraca pois a variavel que era string virou number
//------------------------------------
//Numeros => NUMBER
const valor1 = 1.0;
const valor2 = Number("2.0");
console.log(valor1, valor2);
console.log(Number.isInteger(valor1));
console.log(Number.isInteger(valor2));
const valor3 = 9.871;
const valor4 = 6.871;
const total = valor1*valor3 + valor2*valor4;
const media = total/(valor1+valor2);
console.log(media);
console.log(media.toFixed(2)); //apresenta somente 2 casas decimais
console.log(media.toString()); //transforma em string como pode ser visto abaixo
console.log(typeof media.toString());
console.log(media.toString(2)); //media em binario, 2 binario 8 para octal, 16 para hex
//
//------------------------------------
//Alguns cuidadados com Number
console.log(7/0); // resulta em Infinity, dependendo da linguagem da erro
console.log("10"/2); //faz o calculo mesmo que o 10 seja string
// cuidado com +, no lugar de "10" + 2 = 12, vai ser "102" 
console.log("10" + 2);
// vai verificar se o valor pode ser transformar em number, lembre-se que usa 10.8 e nao 10,8
console.log("string"*2); //nao faz a contetacao da repeticao, retorna NaN
console.log(0.1+0.7); // tem impressisao por causa do IEEE que deseja velocidade no lugar de precisao
console.log(10.0.toString()); // se for um numero inteiro, sem o valor flutuante da erro pode usar o valor flutuante de 0 ou colocar em parateses para dar certo
console.log((10).toString());
//
//------------------------------------
// Math biblioteca Matematica
const raio = 5.6;
const area = Math.PI * Math.pow(raio,2); // .PI para constante de PI e .pow para expoenciacao
console.log(area);
console.log(typeof Math);
//
//------------------------------------
//String " " ou ' ' ou ` `
const escola = "Cod3r";
console.log(escola.charAt(4)); // 0 = C, 1 = o, 2 = d, 3 = 3 e 4 = r
// caso nao tenha no indice volta vazio
console.log(escola.charAt(5))
// codigo no correspondente ao valor
console.log(escola.charCodeAt(4)); // como pode ser visto o valor 114 coresponde ao r
console.log(escola.indexOf("d")); //retorna o indice do valor d no caso index 2
console.log(escola.substring(1)); // retorna o valor depois do index 1
console.log(escola.substring(0,3)); // vai de 0 a 3 e nao inclui o 3
// contatenacao  ==> concat() ou +
console.log("Escola ".concat(escola).concat("!"));
console.log(escola.replace(3,"e")); // troca os 3 por e
// transformar string em array, usa o split para separar os valores pelas virgualas no caso, ou usar REGEX
console.log("Ana,Maria,Pedro".split(","));
//
//------------------------------------
//
let nome = "Luiz";
const contatenacao = "Olá " + nome + "!";
const templete = `
    Olá
    ${nome}!`
console.log(contatenacao); // faz em sequencia
console.log(templete); // leva em base os espacamentos e outras coisas.
// expressoes
console.log(`1 + 1 = ${1+1}`);
//
//------------------------------------
// Boolean
console.log(true);
// inteiros - 0, " ", "texto", [], {}, Infinity, isAtivo = true
console.log(false);
// 0, "", null, NaN, underfined, isAtivo = false
// Expressoes
// || = ou, && = e, == igualdade, === igualdade estrita, > maior, < menor
nome = "";
console.log(nome || "Desconhecido");
//------------------------------------
// Array
const valoresArray = [7.7,7,8.9,9.6];
console.log(valoresArray[1],valoresArray[3]);
console.log(valoresArray[4]);
console.log(valoresArray);
console.log(valoresArray.length);
valoresArray.push({id: 3}, false, null, "texto"); //adiciona valor no array
console.log(valoresArray);
console.log(valoresArray.pop()); //mostra e removo o ultimo valor
console.log(valoresArray);
delete valoresArray[0]; // remove o valor no index
console.log(valoresArray);
console.log(typeof valoresArray);
//
//------------------------------------
// Object
const produto1 = {};
produto1.nome = "Celular Ultra Mega";
produto1.preco = 4999.99;
const produto2 = {
  nome: "Camisa Polo",
  preco: 79.90,
};

console.log(produto1);
console.log(produto2);
/* -------------------------------
Json modelo

' { "nome" : "Camisa Polo" , "preco" : "79.90" } '

---------------------------------- */
//
//------------------------------------
// Null e Undefined
// 
let endereco; // nao inicializada
console.log(endereco);

endereco = null; // ausencia de valor ou endereço
console.log(endereco);